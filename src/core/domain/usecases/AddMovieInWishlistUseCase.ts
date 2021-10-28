import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import { WishlistRepositories } from "core/adapters/types";

interface AddMovieInWishlistUseCaseInterface {
  execute(movieId: number, presenter: WishlistPresenter): Promise<void>;
}

export default class AddMovieInWishlistUseCase
  implements AddMovieInWishlistUseCaseInterface
{
  constructor(private wishlistRepository: WishlistRepositories) {}

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
