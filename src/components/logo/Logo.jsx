import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center justify-center w-max gap-2">
            <img
                src="/assets/images/logo.png"
                alt="logo"
                className="h-8 object-contain invert pb-1"
            />
            <h1 className="base-semibold sm:h3-semibold">MovieFlix</h1>
        </Link>
    );
};

export default Logo;
