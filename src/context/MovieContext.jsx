import { createContext, useContext, useState } from "react";
import useFetch from "../utils/fetchData";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const { isLoading, error, movies, loadMore, totalResults } = useFetch(
        query || "avenger"
    );
    return (
        <MovieContext.Provider
            value={{
                query,
                movies,
                setQuery,
                isLoading,
                error,
                totalResults,
                loadMore,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

const useMovieContext = () => {
    return useContext(MovieContext);
};

export { MovieProvider, useMovieContext };
