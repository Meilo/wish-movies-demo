import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { RemoveMovieInWishlistUseCaseMethods } from "./methodes";

export default class RemoveMovieInWishlistUseCase
  implements RemoveMovieInWishlistUseCaseMethods
{
  constructor(private wishlistRepository: WishlistRepository) {}

  async execute(movieId: number, presenter: WishlistPresenter) {
    const movieIsPresentInWishlist =
      await this.wishlistRepository.getItemStatusInWishlist(movieId);
    if (!movieIsPresentInWishlist) {
      presenter.displayMessage("wishlist.movieNotFound");
    } else {
      const result = await this.wishlistRepository.removeMovieInWishlist();
      if (result.statusCode === 200) {
        presenter.displayMessage("wishlist.movieHasBeenRemoved");
      } else {
        presenter.displayMessage("wishlist.error");
      }
    }
  }
}
