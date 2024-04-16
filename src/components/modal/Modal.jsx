import { useEffect, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import PrimaryBtn from "../button/PrimaryBtn";
import { useWishlistContext } from "../../context/WishListContext";
import toaster from "react-hot-toast";
const Modal = () => {
    const { isModalOpen, setIsModalOpen, movie, isSingleMovieLoading } =
        useModalContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const media = window.matchMedia("(min-width: 1024px)");
    const { addToWishlist } = useWishlistContext();
    const { error, success } = useWishlistContext();

    let maxLength = media.matches ? 300 : 100;
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.classList.contains("modal-container") && isModalOpen) {
                setIsModalOpen(false);
                setIsExpanded(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isModalOpen, setIsModalOpen]);

    useEffect(() => {
        if (error) {
            toaster.error(error);
        }
        if (success) {
            toaster.success(success);
        }
    }, [error, success]);
    return (
        isModalOpen &&
        movie !== null && (
            <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full p-4 bg-dark-1/40 z-30 flex-center modal-container">
                {isSingleMovieLoading ? (
                    <div className="h-[36rem] lg:h-[40rem] w-full md:w-[90%] lg:w-[80%] xl:w-[85%] bg-dark-4 rounded-lg" />
                ) : (
                    <div className="flex flex-col lg:flex-row lg:h-[40rem] h-max w-full md:w-[90%] lg:w-[80%] xl:w-[85%] bg-dark-3 rounded-lg overflow-x-hidden overflow-y-auto custom-scrollbar relative">
                        <button
                            className="h-8 w-8 bg-dark-3 hover:bg-dark-2 cursor-pointer text-white rounded-full flex-center absolute top-2 right-2 lg:left-2 z-30"
                            onClick={() => {
                                setIsModalOpen(false);
                                setIsExpanded(false);
                            }}
                        >
                            <div className="text-xl">&#10006;</div>
                        </button>
                        <div className="w-full h-96 lg:flex-1 lg:h-full">
                            <img
                                src={movie?.Poster}
                                alt={movie?.Title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="px-2 py-4 lg:p-6 lg:flex-1 flex flex-col lg:justify-between gap-2">
                            <div className="flex flex-col">
                                <h1 className="base-medium lg:h3-semibold text-light-2">
                                    {movie?.Title}
                                </h1>
                                <h1 className="text-light-3 small-medium lg:base-medium">
                                    Released on: {movie?.Year}
                                </h1>
                                <div className="flex items-center gap-2 pt-3 lg:pt-6">
                                    <h1 className="base-medium text-green-500">
                                        {movie?.imdbRating}&#9733;
                                    </h1>
                                    <h1 className="small-regular text-light-3">
                                        ({movie?.imdbVotes})
                                    </h1>
                                </div>
                                <div className="pt-3 lg:pt-6">
                                    {movie?.Plot.length > maxLength &&
                                    !isExpanded ? (
                                        <p className="text-light-3 small-medium lg:base-medium">
                                            {movie?.Plot.substring(
                                                0,
                                                maxLength
                                            )}
                                            ...
                                            <button
                                                onClick={toggleExpand}
                                                className="text-primary-600"
                                            >
                                                read more
                                            </button>
                                        </p>
                                    ) : (
                                        <p className="text-light-3 small-medium lg:base-medium">
                                            {movie?.Plot} &nbsp;
                                            <button
                                                onClick={toggleExpand}
                                                className="text-primary-600"
                                            >
                                                read less
                                            </button>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <PrimaryBtn
                                    handleClick={() => addToWishlist(movie)}
                                >
                                    Add to wishlist
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default Modal;
