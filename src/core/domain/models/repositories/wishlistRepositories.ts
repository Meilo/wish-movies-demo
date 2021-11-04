import { Wishlist } from "../wishlist";

export interface WishlistRepositories {
  getItemStatusInWishlist(movieId: number): Promise<boolean>;
  getMyWishlist(): Promise<Wishlist>;
  addMovieInWishlist(movieId: number): Promise<{ statusCode: number }>;
  removeMovieInWishlist(movieId: number): Promise<{ statusCode: number }>;
}
