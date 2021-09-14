import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { RemoveMovieInWishlistUseCaseMethods } from "./methodes";

export default class RemoveMovieInWishlistUseCase
  implements RemoveMovieInWishlistUseCaseMethods
{
  constructor(
    private wishlistRepository: WishlistRepository,
    private presenter: WishlistPresenter
  ) {}
  async execute(movieId: number) {
    const isPresent = await this.wishlistRepository.getItemStatusInWishlist(
      movieId
    );
    if (!isPresent)
      return this.presenter.showErrorMessage("wishlist.movieNotFound");
    const result = await this.wishlistRepository.removeMovieInWishlist();
    if (result?.statusCode === 200)
      return this.presenter.showSuccessMessage(
        "wishlist.movieRemovedWithSuccess"
      );
    return this.presenter.showErrorMessage("wishlist.default");
  }
}
