import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("dark");

    const toggleTheme = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };
