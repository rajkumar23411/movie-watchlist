import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import { WishlistProvider } from "./context/WishListContext.jsx";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "./context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <ModalProvider>
                <MovieProvider>
                    <WishlistProvider>
                        <App />
                        <Toaster position="bottom-center" />
                    </WishlistProvider>
                </MovieProvider>
            </ModalProvider>
        </AuthProvider>
    </BrowserRouter>
);
