import { WishlistRepositories } from "core/domain/models/repositories/wishlistRepositories";

export default class WishlistRepository implements WishlistRepositories {
  constructor(private repositories: WishlistRepositories) {}

  getItemStatusInWishlist(movieId: number) {
    return this.repositories.getItemStatusInWishlist(movieId);
  }
  getMyWishlist() {
    return this.repositories.getMyWishlist();
  }
  addMovieInWishlist(movieId: number) {
    return this.repositories.addMovieInWishlist(movieId);
  }
  removeMovieInWishlist(movieId: number) {
    return this.repositories.removeMovieInWishlist(movieId);
  }
}
