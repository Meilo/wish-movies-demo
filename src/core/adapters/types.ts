import { Movie, Wishlist } from "core/domain/models";

export type MoviesProps = {
  limit?: number;
  toTransformed?: boolean;
  withBackDropImage?: boolean;
  movieId: number | undefined;
};

export type WishlistRepositories = {
  getItemStatusInWishlist(movieId: number): Promise<boolean>;
  getMyWishlist(): Promise<Wishlist>;
  addMovieInWishlist(movieId: number): Promise<{ statusCode: number }>;
  removeMovieInWishlist(): Promise<{ statusCode: number }>;
};

export type MoviesRepositories = {
  getDiscoverMovies(): Promise<Movie[]>;
  getMovieById(movieId: number): Promise<Movie>;
};
