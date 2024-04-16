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

function App() {
    const { isModalOpen } = useModalContext();

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);
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
                        path="/my-wishlist"
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
