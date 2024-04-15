import propType from "prop-types";
const PrimaryBtn = ({ children, handleClick, size = "md" }) => {
    return (
        <button onClick={handleClick} className={`btn-primary btn-${size}`}>
            {children}
        </button>
    );
};

PrimaryBtn.propTypes = {
    handleClick: propType.func,
    children: propType.node || propType.string,
    size: propType.oneOf(["sm", "md", "lg"]),
};
export default PrimaryBtn;
