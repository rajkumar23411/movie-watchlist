import { useEffect, useState } from "react";
import { useMovieContext } from "../../context/MovieContext";

const MobileSearchBar = () => {
    const { query, setQuery } = useMovieContext();
    const [isMobileSearchBarActive, setIsMobileSearchBarActive] =
        useState(false);

    // if close outsie search bar then set handleActive to false
    useEffect(() => {
        const handleActive = (e) => {
            if (
                e.target.parentElement.id !== "search-bar" &&
                !e.target.parentElement.classList.contains("search")
            ) {
                setIsMobileSearchBarActive(false);
            }
        };

        window.addEventListener("click", handleActive);
        return () => {
            window.removeEventListener("click", handleActive);
        };
    }, [isMobileSearchBarActive]);
    return (
        <>
            <div
                className={`fixed ${
                    isMobileSearchBarActive ? "top-2" : "-top-full"
                } left-0 right-0 w-full px-2 `}
            >
                <div className="w-full flex-center h-12 bg-dark-4 px-2 rounded-md search">
                    <input
                        type="text"
                        placeholder="Type your moive title here ..."
                        className="w-full bg-transparent pr-4 outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <img
                        src="/assets/icons/close.svg"
                        alt="close"
                        onClick={() => setIsMobileSearchBarActive(false)}
                        className="h-5"
                    />
                </div>
            </div>
            <img
                src="/assets/icons/search.svg"
                alt="search"
                onClick={() => setIsMobileSearchBarActive(true)}
                className="search-btn"
            />
        </>
    );
};

export default MobileSearchBar;
