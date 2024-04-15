import { useEffect } from "react";
import MovieCard from "../../components/card/MovieCard";
import Loader from "../../components/loader/Loader";
import { useMovieContext } from "../../context/MovieContext";
import { useWishlistContext } from "../../context/WishListContext";
import toaster from "react-hot-toast";
const Home = () => {
    const { isLoading, movie } = useMovieContext();
    const { error, success } = useWishlistContext();

    useEffect(() => {
        if (error) {
            toaster.error(error);
        }
        if (success) {
            toaster.success(success);
        }
    }, [error, success]);
    return (
        <div className="flex-center py-10">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 place-items-center justify-center">
                    {movie?.map((m) => (
                        <MovieCard key={m.imdbID} movie={m} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
