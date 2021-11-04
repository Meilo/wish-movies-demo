import { WishlistPresentation } from "../models/presenters/wishlistPresentation";
import { WishlistRepositories } from "../models/repositories/wishlistRepositories";
import { WishlistUseCase } from "../models/usecases/wishlistUseCase";

export default class AddMovieInWishlistUseCase implements WishlistUseCase {
  constructor(private wishlistRepository: WishlistRepositories) {}

  async execute(
    presenter: WishlistPresentation,
    movieId: number
  ): Promise<void> {
    presenter.displayWishlistLoading();
    const movieIsPresentInWishlist =
      await this.wishlistRepository.getItemStatusInWishlist(movieId);
    if (movieIsPresentInWishlist) {
      presenter.displayMessage("wishlist.movieAlreadyExist");
    } else {
      const result = await this.wishlistRepository.addMovieInWishlist(movieId);
      if (result.statusCode === 201) {
        presenter.displayMessage("wishlist.movieAddWithSuccess");
      } else {
        presenter.displayMessage("wishlist.error");
      }
    }
  }
}
