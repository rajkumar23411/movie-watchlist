const Hamburger = ({ handleClick }) => {
    return (
        <button className="transition-all duration-100 ease-in-out">
            <img
                src="/assets/icons/hamburger.svg"
                alt="hamburger"
                className="h-8 w-8"
                onClick={() => handleClick(true)}
            />
        </button>
    );
};

export default Hamburger;
