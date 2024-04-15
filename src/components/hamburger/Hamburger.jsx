const Hamburger = ({ handleClick, isActive }) => {
    return (
        <button
            onClick={handleClick}
            className={`flex flex-col ${isActive ? "gap-0" : "gap-1"} `}
        >
            <div
                className={`h-[0.1rem] w-6 bg-rose-50 ${
                    isActive ? "transform -rotate-45 origin-center " : ""
                } transition-all duration-100 ease-linear`}
            />
            <div
                className={`h-[0.1rem] w-6 bg-rose-50 ${
                    isActive ? "hidden" : ""
                }`}
            />
            <div
                className={`h-[0.1rem] w-6 bg-rose-50 ${
                    isActive ? "transform rotate-45 origin-center " : ""
                } transition-all duration-100 ease-linear`}
            />
        </button>
    );
};

export default Hamburger;
