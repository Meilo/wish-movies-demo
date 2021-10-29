import getDiscoverMovies from "ui/api/getDiscoverMovies";
import getItemStatusInWishlist from "ui/api/getItemStatusInWishlist";
import getMovieById from "ui/api/getMovieById";
import getMyWishlist from "ui/api/getMyWishlist";
import addMovieInWishlist from "./addMovieInWishlist";
import removeMovieInWishlist from "./removeMovieInWishlist";

export const wishlistRepository = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist,
  removeMovieInWishlist,
};

export const moviesRepository = {
  getItemStatusInWishlist,
  getDiscoverMovies,
  getMovieById,
};
