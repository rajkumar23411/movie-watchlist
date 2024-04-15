import propType from "prop-types";

const Label = ({ label, ...props }) => {
    return (
        <label htmlFor={label} {...props} className="small-regular">
            {label}
        </label>
    );
};

Label.propTypes = {
    label: propType.string,
};

export default Label;
