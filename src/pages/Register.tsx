import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { IconButton, InputAdornment } from "@mui/material"
import iconLogo from "../assets/iconLogo.svg"
import InputForm from "@/components/ui/InputForm";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import ImageBgr from "@/components/ui/ImageBgr";
import { motion } from "framer-motion"
import { useAuthStore } from "@/store/useAuthStore";
import toast from 'react-hot-toast';
import LoadingLog from "@/components/ui/LoadingLog";
import { useSocialAuth } from "@/components/hooks/useSocialAuth";
import { useForm } from 'react-hook-form';

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { signUp, isLoading, error: signUpError } = useAuthStore();
    const { handleSignInGoogle, handleSignInFacebook } = useSocialAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();


    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignUp = async (data: { name: string; email: string; password: string }) => {
        const user = await signUp(data.email, data.password, data.name);

        if (user) {
            toast.success('Account created successfully! Please sign in.');
            navigate("/login");
        } else if (signUpError) {
            toast.error(`Register fail`);
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
                <div className="absolute inset-0  z-[1] bg-[#00000040] backdrop-blur-[1px]"></div>
                <div className="h-screen flex flex-col gap-3 items-center justify-end w-[600px] md:flex md:flex-row md:items-start md:w-[940px] md:pt-[132px] md:px-10 md:gap-4">
                    <div className="w-1/2 relative bg-cover bg-center hidden md:block">
                        <div className="relative z-10 h-full py-[80px] text-white">
                            <div className="flex items-center mb-[100px] gap-3">
                                <div className="rounded-full w-[64px] h-[64px] flex items-center justify-center">
                                    <img src={iconLogo} alt="Logo" className="w-[60px] h-[60px]" />
                                </div>
                                <h1 className="text-2xl font-bold">OneSport</h1>
                            </div>

                            <h2 className="text-4xl font-bold mb-4">Building the Future...</h2>
                            <p className="text-gray-200 max-w-md">
                                Create your free account to follow your favorite football leagues, get real-time match updates, and never miss a moment of the action.
                            </p>

                        </div>
                    </div>

                    <div className="pt-[60px] h-[700px] w-screen bg-white z-20 relative rounded-t-3xl md:rounded-3xl md:w-1/2 md:h-200 lg:rounded-t-3xl">
                        <div className="w-full px-8 rounded-xl">
                            <p className="text-[12px] text-gray-500 uppercase">Let's get you started</p>
                            <h2 className="text-2xl font-bold mt-2 mb-6">Create an Account</h2>

                            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSignUp)}>
                                <InputForm
                                    label="Your Name"
                                    {...register("name", { required: "You haven't entered a name" })}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name?.message}
                                />

                                <InputForm
                                    label="Email"
                                    {...register("email", {
                                        required: "You haven't entered an email",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email",
                                        },
                                    })}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email?.message}
                                />

                                <InputForm
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "You haven't entered a password" })}
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
                                <Button variant="secondary" size="lg" className="uppercase transition-colors duration-200 ease-linear" type="submit">
                                    {
                                        isLoading ? (
                                            <LoadingLog />
                                        ) : (
                                            "Get Started"
                                        )
                                    }
                                </Button>
                            </form>

                            <div className="flex items-center my-6">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="mx-3 text-black">Or</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>

                            <div className="space-y-3 mb-[50px]">

                                <Button variant="outline" size="lg" className="w-full relative py-6 transition-colors duration-150 ease-linear" onClick={handleSignInGoogle}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <FcGoogle size={20} />
                                    </div>
                                    <span className="text-center w-full">Sign up with Google</span>
                                </Button>

                                <Button variant="outline" size="lg" className="w-full relative py-6 transition-colors duration-150 ease-linear" onClick={handleSignInFacebook}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <FaFacebookF size={20} className="text-blue-600" />
                                    </div>
                                    <span className="text-center w-full">Sign up with Facebook</span>
                                </Button>
                            </div>

                            <p className="text-sm text-center text-gray-500 mt-6">
                                Already have an account? <Button variant="link" className="uppercase"><Link to="/login">login here</Link></Button>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Register