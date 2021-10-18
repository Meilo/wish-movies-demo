import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import { AddMovieInWishlistUseCaseMethods } from "./methodes";

export default class AddMovieInWishlistUseCase
  implements AddMovieInWishlistUseCaseMethods
{
  constructor(private wishlistRepository: WishlistRepository) {}

  async execute(movieId: number, presenter: WishlistPresenter): Promise<void> {
    presenter.displayWishlistLoading();
    const movieIsPresentInWishlist =
      await this.wishlistRepository.getItemStatusInWishlist(movieId);
    if (movieIsPresentInWishlist) {
      presenter.displayMessage("wishlist.movieAlreadyExist");
    } else {
      const result = await this.wishlistRepository.addMovieInWishlist();
      if (result.statusCode === 200) {
        presenter.displayMessage("wishlist.movieAddWithSuccess");
      } else {
        presenter.displayMessage("wishlist.error");
      }
    }
  }
}
