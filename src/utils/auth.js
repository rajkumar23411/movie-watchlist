import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthUser = (email) => {
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const register = () => {
        if (!email) {
            setError("Email is required");
            return;
        }

        // check if email already exits in the local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((user) => user.email === email)) {
            setError("Email already exists");
            return;
        }

        const newUser = {
            email,
            isLoggedIn: true,
            wishlist: [],
        };

        setUser(newUser);
        setUsers((prevUsers) => [...prevUsers, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setIsAuthenticated(true);
        setSuccess("Registered successfully");
        navigate("/");
    };

    const login = () => {
        if (!email) {
            setError("Email is required");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users"));

        if (!users) {
            setError("Invalid email id");
            return;
        }
        const user = users.find((user) => user.email === email);

        if (!user) {
            setError("Invalid email id");
            return;
        }

        user.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify(users));
        setUser(user);
        setIsAuthenticated(true);
        navigate("/");
        setSuccess("Logged in successfully");
    };

    const logOut = () => {
        // Perform logout logic
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((user) => user.email === email);

        if (user) {
            user.isLoggedIn = false;
            localStorage.setItem("users", JSON.stringify(users));
            setUser({});
            setIsAuthenticated(false);
            setSuccess("Logged out successfully");
        }
    };

    // after 3000ms set isError to null
    useEffect(() => {
        setTimeout(() => {
            setError("");
            setSuccess("");
        }, 1000);
    }, [error, success]);

    return {
        user,
        users,
        isAuthenticated,
        error,
        setError,
        success,
        setSuccess,
        register,
        login,
        logOut,
    };
};

export default useAuthUser;
