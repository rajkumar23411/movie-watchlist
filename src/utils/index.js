export const API_URL = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_MOVIE_API_KEY
}&plot=full`;

export const placeholderPoster = "/assets/images/placeholder-poster.jpg";

export const NavLinkTags = [
    {
        title: "Home",
        to: "/",
    },
    {
        title: "Wishlist",
        to: "/my-wishlist",
    },
    {
        title: "Login",
        to: "/login",
    },
];
