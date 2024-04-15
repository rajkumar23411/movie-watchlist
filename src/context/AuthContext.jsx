import { createContext, useContext, useState } from "react";
import useAuthUser from "../utils/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const {
        isAuthenticated,
        error,
        setError,
        logOut,
        login,
        register,
        user,
        success,
        setSuccess,
    } = useAuthUser(email);
    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logOut,
                register,
                error,
                setError,
                email,
                setEmail,
                success,
                setSuccess,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth, AuthProvider };
