import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store/useAuthStore";

export const useSocialAuth = () => {
    const { signInWithGoogle, signInWithFacebook, error } = useAuthStore();
    const navigate = useNavigate();

    const handleSignInGoogle = async () => {
        const user = await signInWithGoogle();
        if (user) {
            toast.success('Successfully signed in with Google.');
            navigate("/");
        } else if (error) {
            console.error("Google sign-in failed:", error);
            toast.error(`Sign in failed`);
        }
    };

    const handleSignInFacebook = async () => {
        const user = await signInWithFacebook();
        if (user) {
            toast.success('Successfully signed in with Facebook.');
            navigate("/");
        } else if (error) {
            console.error("Facebook sign-in failed:", error);
            toast.error(`Sign in failed`);
        }
    };

    return {
        handleSignInGoogle,
        handleSignInFacebook
    };
};
