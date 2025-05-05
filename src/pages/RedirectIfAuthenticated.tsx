import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const RedirectIfAuthenticated = ({ children }: { children: ReactNode }) => {
    const { user } = useAuthStore();

    console.log(user)

    if (user) {
        return <Navigate to="/home" replace />;
    }

    return <>{children}</>;
};

export default RedirectIfAuthenticated;
