import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useWishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const { isAuthenticated, user, error, setError, success, setSuccess } =
        useAuth();
    const addToWishlist = (movie) => {
        if (!isAuthenticated) {
            setError("Please login to add to wishlist");
            return null;
        }
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        const findUser = users.find((user) => users.email === user.email);

        return;
        if (findUser) {
            // check if movie is already added in the wishlist
            const isMovieAlreadyAdded = findUser.wishlist.find(
                (item) => item.imdbID === movie.imdbID
            );
            if (isMovieAlreadyAdded) {
                setError("Movie already in your wishlist");
                return null;
            }
            findUser.wishlist.push(movie);
            localStorage.setItem("users", JSON.stringify(users));
            setWishlist(findUser.wishlist);
        } else {
            const newUser = {
                email: user.email,
                wishlist: [movie],
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            setWishlist(newUser.wishlist);
        }
        setSuccess("Movie added to wishlist");
    };

    const removeFromWishlist = (id) => {
        if (!isAuthenticated) {
            setError("Please login to remove from wishlist");
            return null;
        }
        const users = JSON.parse(localStorage.getItem("users"));
        const findUser = users.find((user) => user.email === user.email);
        if (findUser) {
            findUser.wishlist = findUser.wishlist.filter(
                (item) => item.imdbID !== id
            );
            localStorage.setItem("users", JSON.stringify(users));
            setWishlist(findUser.wishlist);
            setSuccess("Movie removed from wishlist");
        }
    };

    const getMyWishlist = () => {
        const users = JSON.parse(localStorage.getItem("users"));
        const findUser = users.find((user) => user.email === user.email);
        if (findUser) {
            setWishlist(findUser.wishlist);
        }

        return wishlist;
    };

    return {
        error,
        setError,
        success,
        setSuccess,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        getMyWishlist,
    };
};

export default useWishlist;
