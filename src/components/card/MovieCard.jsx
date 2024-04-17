import PrimaryBtn from "./../button/PrimaryBtn";
import { useWishlistContext } from "../../context/WishListContext.jsx";
import { useModalContext } from "../../context/ModalContext.jsx";
import { movieProps } from "../../utils/index.js";
import SecondaryBtn from "../button/SecondaryBtn.jsx";
const MovieCard = ({ movie }) => {
    const { addToWishlist } = useWishlistContext();
    const { setIsModalOpen, getSingleMovieDetails } = useModalContext();

    const handleCardClick = (id) => {
        setIsModalOpen(true);
        getSingleMovieDetails(id);
    };
    return (
        <div className="h-max w-40 sm:w-52 lg:w-56 xl:w-60  rounded-xl overflow-hidden relative border border-light-2 dark:border-0">
            <div className="h-48 sm:h-64 w-full overflow-hidden group">
                <img
                    src={movie?.Poster}
                    alt={movie?.Title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-200"
                />
            </div>
            <div className="p-2 bg-light-2 dark:bg-dark-4 h-max flex flex-col gap-3">
                <div>
                    <h1 className="block sm:hidden small-medium">
                        {movie?.Title.length > 18
                            ? movie?.Title.slice(0, 18) + "..."
                            : movie?.Title}
                    </h1>
                    <h1 className="hidden sm:block base-medium">
                        {movie?.Title.length > 20
                            ? movie?.Title.slice(0, 20) + "..."
                            : movie?.Title}
                    </h1>
                    <p className="text-light-3 small-medium">{movie.Year}</p>
                </div>
                <div className="flex-center gap-2">
                    <SecondaryBtn
                        size="sm"
                        handleClick={() => handleCardClick(movie.imdbID)}
                    >
                        View
                    </SecondaryBtn>
                    <PrimaryBtn
                        size="sm"
                        handleClick={() => addToWishlist(movie)}
                    >
                        Add
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

MovieCard.propTypes = movieProps;

export default MovieCard;
