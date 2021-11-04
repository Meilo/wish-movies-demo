import { WishlistPresentation } from "../models/presenters/wishlistPresentation";
import { WishlistRepositories } from "../models/repositories/wishlistRepositories";
import { WishlistUseCase } from "../models/usecases/wishlistUseCase";

export default class RemoveMovieInWishlistUseCase implements WishlistUseCase {
  constructor(private wishlistRepository: WishlistRepositories) {}

  async execute(presenter: WishlistPresentation, movieId: number) {
    const movieIsPresentInWishlist =
      await this.wishlistRepository.getItemStatusInWishlist(movieId);
    if (!movieIsPresentInWishlist) {
      presenter.displayMessage("wishlist.movieNotFound");
    } else {
      const result = await this.wishlistRepository.removeMovieInWishlist(
        movieId
      );
      if (result.statusCode === 201) {
        presenter.displayMessage("wishlist.movieHasBeenRemoved");
      } else {
        presenter.displayMessage("wishlist.error");
      }
    }
  }
}
