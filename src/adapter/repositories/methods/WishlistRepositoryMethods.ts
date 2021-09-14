import { Wishlist } from "domain/models";

export interface WishLiktsRepositoryMethods {
  getItemStatusInWishlist(movieId: number): Promise<boolean>;
  getMyWishlist(): Promise<Wishlist>;
  addMovieInWishlist(): Promise<{ statusCode: number }>;
  removeMovieInWishlist(): Promise<{ statusCode: number }>;
}
