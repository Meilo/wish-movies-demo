import { WishLiktsRepositoryMethods } from "./methods/WishlistRepositoryMethods";

export default class WishlistRepository implements WishLiktsRepositoryMethods {
  constructor(private repositories: WishLiktsRepositoryMethods) {}
  getItemStatusInWishlist(movieId: number) {
    return this.repositories.getItemStatusInWishlist(movieId);
  }
  getMyWishlist() {
    return this.repositories.getMyWishlist();
  }
  addMovieInWishlist() {
    return this.repositories.addMovieInWishlist();
  }
}
