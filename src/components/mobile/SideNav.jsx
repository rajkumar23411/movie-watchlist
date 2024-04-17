import { NavLink, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import { NavLinkTags } from "../../utils";
import { useAuth } from "../../context/AuthContext";
import ThemeBtn from "./../button/ThemeBtn";
import { useEffect } from "react";

const SideNav = ({ isActive, handleClick }) => {
    const location = useLocation().pathname;
    const { logOut, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleClickOutSide = (e) => {
            if (
                e.target.classList.contains("side-nav") ||
                e.target.classList.contains("nav-links")
            )
                handleClick(false);
        };

        window.addEventListener("click", handleClickOutSide);
        return () => window.removeEventListener("click", handleClickOutSide);
    }, [isActive, handleClick]);

    return (
        <div
            className={`fixed
                ${
                    isActive
                        ? "w-full opacity-100 left-0 z-20"
                        : "w-0 opacity-0 -left-full"
                }
        top-0 bottom-0 h-full bg-dark-3/40 z-20 transition-all duration-150 ease-in-out side-nav`}
        >
            <div className="w-72 h-full bg-light-1 dark:bg-dark-4 flex flex-col justify-between p-4">
                <div>
                    <div className="flex items-center justify-between">
                        <Logo />
                        <button onClick={() => handleClick(false)}>
                            <img
                                src="/assets/icons/close.svg"
                                alt="close"
                                className="h-6 w-6"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col mt-10 gap-4">
                        {NavLinkTags.map((tag, index) => {
                            const isLinkActive = location === tag.to;
                            return (
                                <NavLink
                                    key={index}
                                    to={tag.to}
                                    className={`text-dark-3 dark:text-white px-6 py-2 rounded nav-links ${
                                        isLinkActive &&
                                        "bg-primary-500 text-white dark:text-dark-2"
                                    }`}
                                >
                                    {tag.title}
                                </NavLink>
                            );
                        })}
                        {isAuthenticated ? (
                            <button
                                onClick={logOut}
                                className="text-dark-3 dark:text-white px-6 py-2 w-max"
                            >
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className={
                                    "text-dark-3 dark:text-white px-6 py-2"
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className="px-6 py-2">
                    <ThemeBtn />
                </div>
            </div>
        </div>
    );
};

export default SideNav;
