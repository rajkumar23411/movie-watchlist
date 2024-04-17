import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import AuthLayout from "./layouts/_auth/AuthLayout.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/Sign up/SignUp.jsx";
import RootLayout from "./layouts/_root/RootLayout.jsx";
import MyWishlist from "./pages/My wishlist/MyWishlist.jsx";
import ProtectedRoute from "./utils/ProtectedRoute";
import Modal from "./components/modal/Modal.jsx";
import { useModalContext } from "./context/ModalContext.jsx";
import { useEffect } from "react";
import toaster from "react-hot-toast";
import { useAuth } from "./context/AuthContext.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
    const { isModalOpen } = useModalContext();
    const { error, success } = useAuth();
    const { themeMode } = useTheme();

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);
    useEffect(() => {
        if (error) {
            toaster.error(error);
        }
        if (success) {
            toaster.success(success);
        }
    }, [error, success]);
    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);
    return (
        <main className="flex w-full">
            <Modal />
            <Routes>
                {/* Auth Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                {/* Root Route */}
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/movie/:id" element={<Home />} />
                    <Route
                        path="/my-watchlist"
                        element={
                            <ProtectedRoute>
                                <MyWishlist />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
