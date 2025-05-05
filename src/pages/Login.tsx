import { useState } from "react"
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { IconButton, InputAdornment } from "@mui/material"
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import iconLogo from "../assets/iconLogo.svg"
import InputForm from "@/components/ui/InputForm";
import ImageBgr from "@/components/ui/ImageBgr";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";
import LoadingLog from "@/components/ui/LoadingLog";
import { useSocialAuth } from "@/components/hooks/useSocialAuth";

type FormValues = {
    email: string;
    password: string;
};

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, isLoading, error } = useAuthStore();
    const { handleSignInGoogle, handleSignInFacebook } = useSocialAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (data: FormValues) => {
        const user = await signIn(data.email, data.password);
        if (user) {
            navigate("/");
            toast.success('Login successful');
        } else if (error) {
            console.error("Login failed:", error);
            toast.error("Incorrect username or password");
        }
    };

    return (
        <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-center relative w-full overflow-hidden">
                <ImageBgr />
                <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[1px]"></div>
                <div className="flex h-screen w-[940px] pt-[132px]">
                    <div className="w-1/2 relative bg-cover bg-center">
                        <div className="relative z-10 h-full py-[80px] text-white">
                            <div className="flex items-center mb-[100px] gap-3">
                                <div className="rounded-full w-[64px] h-[64px] flex items-center justify-center">
                                    <img src={iconLogo} alt="Logo" className="w-[60px] h-[60px]" />
                                </div>
                                <h1 className="text-2xl font-bold">OneSport</h1>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Watch top football teams...</h2>
                            <p className="text-gray-200 max-w-md">
                                Stay updated with live scores, match highlights, and breaking football news — all in one place, designed for true fans of the game.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2 pt-[60px] bg-white z-10 rounded-t-3xl">
                        <div className="w-full px-8 rounded-xl">
                            <p className="text-[12px] text-gray-500 uppercase">WELCOME BACK</p>
                            <h2 className="text-2xl font-bold mt-2 mb-6">Log In to your Account</h2>

                            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                                <InputForm
                                    label="Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email?.message}
                                />

                                <InputForm
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleTogglePassword} edge="end">
                                                    {showPassword ? <EyeOff /> : <Eye />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button type="submit" variant="secondary" size="lg" className="uppercase transition-colors duration-200 ease-linear">
                                    {isLoading ? <LoadingLog /> : "Continue"}
                                </Button>
                            </form>

                            <div className="flex items-center my-[30px]">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="mx-3 text-black">Or</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>

                            <div className="space-y-3 mb-[50px]">
                                <Button variant="outline" size="lg" className="w-full relative py-6" onClick={handleSignInGoogle}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <FcGoogle size={20} />
                                    </div>
                                    <span className="text-center w-full">Log In with Google</span>
                                </Button>

                                <Button variant="outline" size="lg" className="w-full relative py-6" onClick={handleSignInFacebook}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <FaFacebookF size={20} className="text-blue-600" />
                                    </div>
                                    <span className="text-center w-full">Log In with Facebook</span>
                                </Button>
                            </div>

                            <p className="text-sm text-center text-gray-500 mt-6">
                                New User? <Button variant="link" className="uppercase"><Link to="/register">SIGN UP HERE</Link></Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
