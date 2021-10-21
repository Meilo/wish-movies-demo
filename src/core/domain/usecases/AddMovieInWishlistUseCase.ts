import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import WishlistRepository from "core/adapters/repositories/WishlistRepository";

interface AddMovieInWishlistUseCaseInterface {
  execute(movieId: number, presenter: WishlistPresenter): Promise<void>;
}

export default class AddMovieInWishlistUseCase
  implements AddMovieInWishlistUseCaseInterface
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
