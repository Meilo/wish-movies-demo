import getDiscoverMovies from "config/src/ui/api/getDiscoverMovies";
import getItemStatusInWishlist from "config/src/ui/api/getItemStatusInWishlist";
import getMovieById from "config/src/ui/api/getMovieById";
import getMyWishlist from "config/src/ui/api/getMyWishlist";

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
