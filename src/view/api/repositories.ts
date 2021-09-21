import getDiscoverMovies from "view/api/getDiscoverMovies";
import getItemStatusInWishlist from "view/api/getItemStatusInWishlist";
import getMovieById from "view/api/getMovieById";
import getMyWishlist from "view/api/getMyWishlist";

export const wishlistRepository = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist: () => Promise.resolve({ statusCode: 200 }),
  removeMovieInWishlist: () => Promise.resolve({ statusCode: 200 }),
};

export const moviesRepository = {
  getDiscoverMovies,
  getMovieById,
};
