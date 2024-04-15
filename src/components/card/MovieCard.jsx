import { placeholderPoster } from "../../utils";
import PrimaryBtn from "./../button/PrimaryBtn";
import { useWishlistContext } from "../../context/WishListContext.jsx";

const MovieCard = ({ movie }) => {
    const { addToWishlist } = useWishlistContext();

    return (
        <div className="h-max w-48 sm:w-60 rounded-xl overflow-hidden relative">
            <div className="h-48 sm:h-64 w-full overflow-hidden group">
                <img
                    src={movie.Poster || placeholderPoster}
                    alt={movie.Title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-200"
                />
            </div>
            <div className="p-2 bg-dark-4 h-max flex flex-col gap-3">
                <div>
                    <h1 className="base-medium">
                        {movie.Title.length > 25
                            ? movie.Title.slice(0, 25) + "..."
                            : movie.Title}
                    </h1>
                    <p className="text-light-3 small-medium">{movie.Year}</p>
                </div>
                <PrimaryBtn size="sm" handleClick={() => addToWishlist(movie)}>
                    Add to wishlist
                </PrimaryBtn>
            </div>
        </div>
    );
};

export default MovieCard;
