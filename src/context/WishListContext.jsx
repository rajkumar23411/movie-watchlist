import { createContext, useContext } from "react";
import useWishlist from "../utils/wishlist";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const {
        addToWishlist,
        removeFromWishlist,
        wishlist,
        getMyWishlist,
        error,
        success,
    } = useWishlist();
    return (
        <WishlistContext.Provider
            value={{
                addToWishlist,
                removeFromWishlist,
                wishlist,
                getMyWishlist,
                error,
                success,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlistContext = () => {
    return useContext(WishlistContext);
};

export { useWishlistContext, WishlistProvider };
