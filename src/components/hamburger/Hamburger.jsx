const Hamburger = ({ handleClick, isActive }) => {
    return (
        <button className="transition-all duration-100 ease-in-out">
            {isActive ? (
                <img
                    src="/assets/icons/close.svg"
                    alt="close"
                    onClick={() => handleClick(false)}
                    className="h-5 w-5 text-white"
                />
            ) : (
                <img
                    src="/assets/icons/hamburger.svg"
                    alt="hamburger"
                    className="h-8 w-8"
                    onClick={() => handleClick(true)}
                />
            )}
        </button>
    );
};

export default Hamburger;
