import propType from "prop-types";
import { NavLink } from "react-router-dom";

const NavTag = ({ children, to = "/", ...props }) => {
    return (
        <NavLink
            to={`${to}`}
            className="base-regular hover:text-primary-500 capitalize"
            {...props}
        >
            {children}
        </NavLink>
    );
};

NavTag.propTypes = {
    children: propType.string,
    to: propType.string,
};

export default NavTag;
