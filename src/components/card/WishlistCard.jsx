import { useModalContext } from "../../context/ModalContext";
import { useWishlistContext } from "../../context/WishListContext";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";

const WishlistCard = ({ movie }) => {
    const { removeFromWishlist } = useWishlistContext();
    const { setIsModalOpen, getSingleMovieDetails } = useModalContext();

    const handleCardClick = (id) => {
        setIsModalOpen(true);
        getSingleMovieDetails(id);
        console.log("clicking", id);
    };
    return (
        <div className="h-max w-40 sm:w-52 lg:w-56 xl:w-60  rounded-xl overflow-hidden relative">
            <div className="h-48 sm:h-64 w-full overflow-hidden group">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-200"
                />
            </div>
            <div className="p-2 bg-dark-4 h-max flex flex-col gap-3">
                <div>
                    <h1 className="block sm:hidden small-medium">
                        {movie.Title.length > 18
                            ? movie.Title.slice(0, 18) + "..."
                            : movie.Title}
                    </h1>
                    <h1 className="hidden sm:block base-medium">
                        {movie.Title.length > 25
                            ? movie.Title.slice(0, 25) + "..."
                            : movie.Title}
                    </h1>
                    <p className="text-light-3 small-medium">{movie.Year}</p>
                </div>

                <div className="flex gap-1 sm:gap-2">
                    <SecondaryBtn
                        size="sm"
                        onClick={() => handleCardClick(movie.imdbID)}
                    >
                        View
                    </SecondaryBtn>
                    <PrimaryBtn
                        size="sm"
                        handleClick={() => removeFromWishlist(movie.imdbID)}
                    >
                        Remove
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
