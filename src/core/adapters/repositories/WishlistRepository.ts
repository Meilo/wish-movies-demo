import { Wishlist } from "core/domain/models";

interface WishLiktsRepositoryType {
  getItemStatusInWishlist(movieId: number): Promise<boolean>;
  getMyWishlist(): Promise<Wishlist>;
  addMovieInWishlist(): Promise<{ statusCode: number }>;
  removeMovieInWishlist(): Promise<{ statusCode: number }>;
}

export default class WishlistRepository implements WishLiktsRepositoryType {
  constructor(private repositories: WishLiktsRepositoryType) {}
  getItemStatusInWishlist(movieId: number) {
    return this.repositories.getItemStatusInWishlist(movieId);
  }
  getMyWishlist() {
    return this.repositories.getMyWishlist();
  }
  addMovieInWishlist() {
    return this.repositories.addMovieInWishlist();
  }
  removeMovieInWishlist() {
    return this.repositories.removeMovieInWishlist();
  }
}
