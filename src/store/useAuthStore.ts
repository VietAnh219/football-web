import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    User,
    UserCredential
} from 'firebase/auth';
import { auth, db } from '@/firebase';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { FirebaseError } from 'firebase/app';
import { serverTimestamp } from 'firebase/database';

interface ExtendedUser extends User {
    role?: string;
}

interface AuthState {
    user: ExtendedUser | null;
    isLoading: boolean;
    error: string | null;
    signUp: (email: string, password: string, name: string) => Promise<User | null>;
    signIn: (email: string, password: string) => Promise<User | null>;
    signInWithGoogle: () => Promise<User | null>;
    signInWithFacebook: () => Promise<User | null>;
    signOut: () => Promise<void>;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            error: null,

            signUp: async (email, password, name) => {
                try {
                    set({ isLoading: true, error: null });

                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                    if (auth.currentUser) {
                        await updateProfile(auth.currentUser, {
                            displayName: name,
                        });
                    }

                    // Lấy Firestore instance
                    const db = getFirestore();

                    // Lưu thông tin người dùng vào Firestore
                    const userRef = doc(db, "users", userCredential.user.uid);
                    await setDoc(userRef, {
                        email: userCredential.user.email,
                        displayName: name,
                        role: "user",
                        createdAt: new Date(),
                    });

                    const userData = {
                        ...userCredential.user,
                        role: "user",
                    };

                    set({ user: userData, isLoading: false });
                    return userData;
                } catch (err) {
                    let errorMessage = "Đã xảy ra lỗi";

                    if (err instanceof FirebaseError) {
                        if (err.code === "auth/email-already-in-use") {
                            errorMessage = "Email has been registered";
                        }
                    }
                    toast.error(errorMessage);
                    set({ error: errorMessage, isLoading: false });
                    return null;
                }
            },
            signIn: async (email, password) => {
                try {
                    set({ isLoading: true, error: null });
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    const userData = userDoc.data();

                    const extendedUser: ExtendedUser = {
                        ...user,
                        role: userData?.role || "user",
                    };

                    set({ user: extendedUser, isLoading: false });
                    return extendedUser;

                } catch (err) {
                    const error = err as Error;
                    set({ error: error.message, isLoading: false });
                    return null;
                }
            },
            signInWithGoogle: async () => {
                try {
                    set({ isLoading: true, error: null });
                    const provider = new GoogleAuthProvider();
                    const result: UserCredential = await signInWithPopup(auth, provider);

                    const user = result.user;
                    const userRef = doc(db, "users", user.uid);

                    await setDoc(userRef, {
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        createdAt: serverTimestamp(),
                        lastLoginAt: serverTimestamp(),
                    }, { merge: true });

                    const userDoc = await getDoc(userRef);
                    const userData = userDoc.data();

                    const extendedUser: ExtendedUser = {
                        ...user,
                        role: userData?.role || "user"
                    };

                    set({ user: extendedUser, isLoading: false });
                    return extendedUser;

                } catch (err) {
                    let errorMessage = "Đăng nhập Google thất bại.";
                    if (err instanceof FirebaseError) {
                        errorMessage = err.message;
                        if (err.code === 'auth/popup-closed-by-user') {
                            errorMessage = "Đã đóng cửa sổ đăng nhập Google.";
                        }
                    } else if (err instanceof Error) {
                        errorMessage = err.message;
                    }
                    console.error("Sign In with Google Error:", err);
                    set({ error: errorMessage, isLoading: false });
                    return null;
                }
            },

            signInWithFacebook: async () => {
                try {
                    set({ isLoading: true, error: null });
                    const provider = new FacebookAuthProvider();
                    const result: UserCredential = await signInWithPopup(auth, provider);

                    const user = result.user;
                    const userRef = doc(db, "users", user.uid);

                    await setDoc(userRef, {
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        createdAt: serverTimestamp(),
                        lastLoginAt: serverTimestamp(),

                    }, { merge: true });

                    const userDoc = await getDoc(userRef);
                    const userData = userDoc.data();

                    const extendedUser: ExtendedUser = {
                        ...user,
                        role: userData?.role || "user"
                    };

                    set({ user: extendedUser, isLoading: false });
                    return extendedUser;

                } catch (err) {
                    let errorMessage = "Đăng nhập Facebook thất bại.";
                    if (err instanceof FirebaseError) {
                        errorMessage = err.message;
                        if (err.code === 'auth/popup-closed-by-user') {
                            errorMessage = "close login with Facebook.";
                        }
                    } else if (err instanceof Error) {
                        errorMessage = err.message;
                    }
                    console.error("Sign In with Facebook Error:", err);
                    set({ error: errorMessage, isLoading: false });
                    return null;
                }
            },

            signOut: async () => {
                try {
                    await signOut(auth);
                    set({ user: null });
                } catch (err) {
                    const error = err as Error;
                    set({ error: error.message });
                }
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ user: state.user }),
        }
    )
);
