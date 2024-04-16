import NavTag from "../link/NavTag";
import Logo from "../logo/Logo";
import { useAuth } from "../../context/AuthContext";
import SearchBar from "../searchbar/SearchBar";
import { useState } from "react";
import Hamburger from "../hamburger/Hamburger";
import SideNav from "../mobile/SideNav";
import MobileSearchBar from "../mobile/MobileSearchBar";

const Navbar = () => {
    const { logOut, isAuthenticated } = useAuth();
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    return (
        <>
            <nav className="flex relative items-center justify-between w-full px-4 py-2 sm:px-10 sm:py-4 z-10 backdrop-blur-md backdrop:bg-dark-4">
                <div className="flex-center gap-10">
                    <div className="sm:pr-10">
                        <Logo />
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <NavTag to="/">Home</NavTag>
                        <NavTag to="/my-wishlist">wishlist</NavTag>
                        {isAuthenticated ? (
                            <NavTag onClick={logOut}>Logout</NavTag>
                        ) : (
                            <NavTag to="/login">Login</NavTag>
                        )}
                    </div>
                </div>
                <div className="hidden lg:flex-center gap-10">
                    <SearchBar />
                </div>
                <div className="flex-center lg:hidden gap-4" id="search-bar">
                    <MobileSearchBar />

                    <Hamburger
                        isActive={isMobileMenuActive}
                        handleClick={(val) => setIsMobileMenuActive(val)}
                    />
                </div>
            </nav>
            <SideNav
                isActive={isMobileMenuActive}
                handleClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
            />
        </>
    );
};

export default Navbar;
