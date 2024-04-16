import { useEffect, useState } from "react";
import { API_URL } from "./index";

const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [totalResults, setTotalResults] = useState(null);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSingleMovieLoading, setSingleMovieLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setIsError(null);
                setMovies((prevMovies) => [...prevMovies, ...data.Search]);
                setTotalResults(data.totalResults);
            } else {
                setIsError(data.Error);
                setMovies([]);
                setTotalResults(0);
            }
            setIsLoading(false);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
            setIsError("An error occurred while fetching data.");
            return null;
        }
    };

    const getSingleMovieDetails = async (id) => {
        const url = `${API_URL}&i=${id}`;
        setSingleMovieLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setMovie(data);
            }
        } catch (error) {
            console.log(error);
            setIsError("An error occurred while fetching data.");
        }
        setSingleMovieLoading(false);
    };

    const loadMore = async () => {
        const nextPage = currentPage + 1;
        const url = `${API_URL}&s=${params}&page=${nextPage}`;
        const data = await getMovie(url);
        if (data && data.Response === "True") {
            setCurrentPage(nextPage);
        }
    };

    useEffect(() => {
        setMovies([]);
        setCurrentPage(1);
        const timeOut = setTimeout(() => {
            getMovie(`${API_URL}&s=${params}&page=1`);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [params]);

    return {
        isLoading,
        isError,
        movies,
        totalResults,
        loadMore,
        getSingleMovieDetails,
        movie,
        isSingleMovieLoading,
    };
};

export default useFetch;
