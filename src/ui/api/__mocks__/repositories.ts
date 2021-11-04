import getDiscoverMovies from "ui/api/__mocks__/getDiscoverMovies";
import getItemStatusInWishlist from "ui/api/__mocks__/getItemStatusInWishlist";
import getMovieById from "ui/api/__mocks__/getMovieById";
import getMyWishlist from "ui/api/__mocks__/getMyWishlist";

export const wishlistRepository = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist: () => Promise.resolve({ statusCode: 201 }),
  removeMovieInWishlist: () => Promise.resolve({ statusCode: 201 }),
};

export const moviesRepository = {
  getItemStatusInWishlist,
  getDiscoverMovies,
  getMovieById,
};
