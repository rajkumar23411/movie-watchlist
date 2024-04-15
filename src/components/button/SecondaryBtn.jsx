import propType from "prop-types";
const SecondaryBtn = ({ children, handleClick, size = "md" }) => {
    return (
        <button onClick={handleClick} className={`btn-secondary btn-${size}`}>
            {children}
        </button>
    );
};

SecondaryBtn.propTypes = {
    handleClick: propType.func,
    children: propType.node || propType.string,
    size: propType.oneOf(["sm", "md", "lg"]),
};
export default SecondaryBtn;
