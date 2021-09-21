import { WishlistTransformed } from "domain/models";

export interface WishlistMethods {
  getWishlist(): Promise<void>;
  addMovieInWishlist(movieId: number): Promise<string>;
}
