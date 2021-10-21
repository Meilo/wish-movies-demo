import { WishlistRepositories } from "core/adapters/types";

export default class WishlistRepository {
  constructor(private repositories: WishlistRepositories) {}
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
