import propType from "prop-types";
const Input = ({ type = "text", value, onChange = () => {}, ...props }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            {...props}
            className="rounded-md bg-light-2 dark:bg-dark-4 focus:border outline-none focus:border-primary-500 pl-2 w-full h-12"
        />
    );
};

Input.propTypes = {
    type: propType.string,
    value: propType.string,
    onChange: propType.func,
};
export default Input;
