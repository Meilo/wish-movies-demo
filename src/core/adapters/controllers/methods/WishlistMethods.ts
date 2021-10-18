export interface WishlistMethods {
  fetchWishlist(): Promise<void>;
  addMovieInWishlist(movieId: number): Promise<void>;
}
