import { WishlistTransformed } from "domain/models";

export interface WishlistMethods {
  getWishlist(): Promise<WishlistTransformed>;
  addMovieInWishlist(movieId: number): Promise<string>;
}
