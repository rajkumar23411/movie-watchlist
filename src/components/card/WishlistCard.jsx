import { useWishlistContext } from "../../context/WishListContext";
import PrimaryBtn from "../button/PrimaryBtn";

import { movieProps } from "../../utils/index.js";
const WishlistCard = ({ movie }) => {
    const { removeFromWishlist } = useWishlistContext();

    return (
        <div className="h-max w-40 sm:w-52 lg:w-56 xl:w-60 border border-light-3/25 dark:border-0  rounded-xl overflow-hidden relative">
            <div className="h-48 sm:h-64 w-full overflow-hidden group">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-200"
                />
            </div>
            <div className="p-2 bg-light-2 dark:bg-dark-4 h-max flex flex-col gap-3">
                <div>
                    <h1 className="block sm:hidden small-medium">
                        {movie.Title.length > 18
                            ? movie.Title.slice(0, 18) + "..."
                            : movie.Title}
                    </h1>
                    <h1 className="hidden sm:block base-medium">
                        {movie.Title.length > 20
                            ? movie.Title.slice(0, 20) + "..."
                            : movie.Title}
                    </h1>
                    <p className="text-light-3 small-medium">{movie.Year}</p>
                </div>
                <PrimaryBtn
                    size="sm"
                    handleClick={() => removeFromWishlist(movie.imdbID)}
                >
                    Remove
                </PrimaryBtn>
            </div>
        </div>
    );
};

WishlistCard.propTypes = movieProps;

export default WishlistCard;
