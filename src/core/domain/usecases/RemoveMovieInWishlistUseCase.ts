import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import WishlistRepository from "core/adapters/repositories/WishlistRepository";

interface RemoveMovieInWishlistUseCaseInterface {
  execute(movieId: number, presenter: WishlistPresenter): Promise<void>;
}

export default class RemoveMovieInWishlistUseCase
  implements RemoveMovieInWishlistUseCaseInterface
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
