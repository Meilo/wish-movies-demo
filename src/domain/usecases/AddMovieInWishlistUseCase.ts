import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { AddMovieInWishlistUseCaseMethods } from "./methodes";

export default class AddMovieInWishlistUseCase
  implements AddMovieInWishlistUseCaseMethods
{
  constructor(private wishlistRepository: WishlistRepository) {}

  async execute(
    movieId: number,
    presenter: WishlistPresenter
  ): Promise<string> {
    const isPresent = await this.wishlistRepository.getItemStatusInWishlist(
      movieId
    );
    if (isPresent)
      return presenter.showErrorMessage("wishlist.movieAlreadyExist");
    const result = await this.wishlistRepository.addMovieInWishlist();
    if (result?.statusCode === 200)
      return presenter.showSuccessMessage("wishlist.movieAddWithSuccess");
    return presenter.showErrorMessage("wishlist.default");
  }
}
