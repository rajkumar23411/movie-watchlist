import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const RootLayout = () => {
    return (
        <section className="h-screen w-screen">
            <Navbar />
            <Outlet />
        </section>
    );
};

export default RootLayout;
