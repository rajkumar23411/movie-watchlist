import { useEffect } from "react";
import { useWishlistContext } from "../../context/WishListContext.jsx";
import WishlistCard from "../../components/card/WishlistCard.jsx";
import { Link } from "react-router-dom";
import toaster from "react-hot-toast";
const MyWishlist = () => {
    const { getMyWishlist, wishlist, success, error } = useWishlistContext();

    useEffect(() => {
        if (error) {
            toaster.error(error);
        }
        if (success) {
            toaster.success(success);
        }
    }, [error, success]);

    useEffect(() => {
        getMyWishlist();
    }, []);

    return (
        <div className="flex-center py-10">
            {wishlist?.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center justify-center">
                    {wishlist?.map((m, i) => (
                        <WishlistCard key={i} movie={m} />
                    ))}
                </div>
            ) : (
                <div className="h-[34rem] flex-center flex-col gap-10">
                    <h1 className="h3-semibold">
                        No movies added to the wishlist
                    </h1>
                    <Link
                        to="/"
                        className="border-2 border-primary-500 text-primary-500 font-medium rounded-2xl px-6 py-3 hover:bg-primary-500 hover:text-white"
                    >
                        Add now
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyWishlist;
