import { useTheme } from "../../context/ThemeContext";

const ThemeBtn = () => {
    const { themeMode, toggleTheme } = useTheme();

    const onChangeBtn = () => {
        toggleTheme();
    };

    return (
        <button
            onClick={onChangeBtn}
            className="h-12 w-12 bg-light-2 dark:bg-dark-3 rounded-md flex-center cursor-pointer"
        >
            {themeMode === "light" ? (
                <img
                    src="/assets/icons/moon.svg"
                    alt="moon"
                    className="h-6 w-6"
                />
            ) : (
                <img
                    src="/assets/icons/sun.svg"
                    alt="sun"
                    className="h-8 w-8"
                />
            )}
        </button>
    );
};

export default ThemeBtn;
