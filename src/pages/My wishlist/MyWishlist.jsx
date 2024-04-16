import { useEffect } from "react";
import { useWishlistContext } from "../../context/WishListContext.jsx";
import WishlistCard from "../../components/card/WishlistCard.jsx";
import { Link } from "react-router-dom";
const MyWishlist = () => {
    const { getMyWishlist, wishlist } = useWishlistContext();

    useEffect(() => {
        getMyWishlist();
    }, []);

    return (
        <div className="flex-center py-4 sm:py-6 md:py-10">
            {wishlist?.length > 0 ? (
                <div className="flex flex-col gap-4">
                    <h1 className="base-medium sm:h3-medium md:h2-semibold">
                        My Watchlist ({wishlist?.length})
                    </h1>
                    <div className="grid-layout">
                        {wishlist?.map((m, i) => (
                            <WishlistCard key={i} movie={m} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="h-[34rem] flex-center flex-col gap-10">
                    <h1 className="h3-semibold">
                        No movies added to the watchlist
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
