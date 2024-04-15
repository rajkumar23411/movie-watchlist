import { useEffect, useState } from "react";
import { API_URL } from "./index";

const useFetch = (parmas) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsLoading(false);
                setIsError(data.Error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    // debounce
    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovie(`${API_URL}&s=${parmas}`);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [parmas]);

    return { isLoading, isError, movie, getMovie };
};

export default useFetch;
