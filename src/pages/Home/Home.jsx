import MovieCard from "../../components/card/MovieCard";
import Loader from "../../components/loader/Loader";
import { useMovieContext } from "../../context/MovieContext";
const Home = () => {
    const { isLoading, movies, loadMore, totalResults } = useMovieContext();

    return (
        <div className="flex-center py-10">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex-center flex-col gap-10">
                    <div className="grid-layout">
                        {movies?.map((m) => (
                            <MovieCard key={m.imdbID} movie={m} />
                        ))}
                    </div>
                    {totalResults > movies?.length && movies.length !== 0 && (
                        <button
                            onClick={loadMore}
                            className="bg-dark-4 text-white px-4 py-2 rounded-md cursor-pointer text-sm sm:text-base"
                        >
                            Load more
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
