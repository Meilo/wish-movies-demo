import getDiscoverMovies from "ui/api/getDiscoverMovies";
import getItemStatusInWishlist from "ui/api/getItemStatusInWishlist";
import getMovieById from "ui/api/getMovieById";
import getMyWishlist from "ui/api/getMyWishlist";

export const wishlistRepository = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist: () => Promise.resolve({ statusCode: 200 }), // Todo: addMovieInWishlist
  removeMovieInWishlist: () => Promise.resolve({ statusCode: 200 }), // Todo: removeMovieInWishlist
};

export const moviesRepository = {
  getDiscoverMovies,
  getMovieById,
};
