import getDiscoverMovies from "ui/api/getDiscoverMovies";
import getItemStatusInWishlist from "ui/api/getItemStatusInWishlist";
import getMovieById from "ui/api/getMovieById";
import getMyWishlist from "ui/api/getMyWishlist";
import addMovieInWishlist from "./addMovieInWishlist";

export const wishlistRepository = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist,
  removeMovieInWishlist: () => Promise.resolve({ statusCode: 200 }), // Todo: removeMovieInWishlist
};

export const moviesRepository = {
  getDiscoverMovies,
  getMovieById,
};
