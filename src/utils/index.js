import propType from "prop-types";

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
        title: "Watchlist",
        to: "/my-watchlist",
    },
];

export const movieProps = {
    movie: propType.shape({
        Poster: propType.string,
        Title: propType.string,
        Type: propType.string,
        Year: propType.string,
        imdbID: propType.string,
    }),
};
