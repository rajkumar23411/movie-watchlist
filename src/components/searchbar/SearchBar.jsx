import { useMovieContext } from "./../../context/MovieContext";
const SearchBar = () => {
    const { query, setQuery } = useMovieContext();
    return (
        <form
            className="flex h-12 bg-light-2 dark:bg-dark-4 w-max lg:w-[400px] xl:w-420 rounded-md flex-center px-4"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                placeholder="Type your moive title here ..."
                className="bg-transparent w-full h-full outline-none hidden sm:block"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <img
                src="/assets/icons/search.svg"
                alt="search"
                className="h-max"
            />
        </form>
    );
};

export default SearchBar;
