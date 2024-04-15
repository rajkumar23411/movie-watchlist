import { createContext, useContext, useState } from "react";
import useFetch from "../utils/fetchData";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [query, setQuery] = useState("hacker");
    const { isLoading, error, movie } = useFetch(query);
    return (
        <MovieContext.Provider
            value={{ query, movie, setQuery, isLoading, error }}
        >
            {children}
        </MovieContext.Provider>
    );
};

const useMovieContext = () => {
    return useContext(MovieContext);
};

export { MovieProvider, useMovieContext };
