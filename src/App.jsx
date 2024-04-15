import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import AuthLayout from "./layouts/_auth/AuthLayout.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/Sign up/SignUp.jsx";
import RootLayout from "./layouts/_root/RootLayout.jsx";
import MyWishlist from "./pages/My wishlist/MyWishlist.jsx";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
    return (
        <main className="flex w-full">
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
