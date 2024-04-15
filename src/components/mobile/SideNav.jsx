import { NavLink, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import { NavLinkTags } from "../../utils";

const SideNav = ({ isActive, handleClick }) => {
    const location = useLocation().pathname;
    return (
        <div
            className={`fixed 
                ${
                    isActive
                        ? "w-72 opacity-100 left-0 z-20"
                        : "w-0 opacity-0 -left-full"
                }
        top-0 bottom-0 h-full bg-dark-3 z-20 p-4 transition-all duration-150 ease-in-out`}
        >
            <Logo />
            <div className="flex flex-col mt-10 gap-4">
                {NavLinkTags.map((tag, index) => {
                    const isLinkActive = location === tag.to;
                    return (
                        <NavLink
                            key={index}
                            to={tag.to}
                            className={`text-white px-6 py-2 rounded ${
                                isLinkActive && "bg-primary-500"
                            }`}
                        >
                            {tag.title}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default SideNav;
