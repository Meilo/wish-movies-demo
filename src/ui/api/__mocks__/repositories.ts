import getDiscoverMovies from "config/src/ui/api/__mocks__/getDiscoverMovies";
import getItemStatusInWishlist from "config/src/ui/api/__mocks__/getItemStatusInWishlist";
import getMovieById from "config/src/ui/api/__mocks__/getMovieById";
import getMyWishlist from "config/src/ui/api/__mocks__/getMyWishlist";

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
