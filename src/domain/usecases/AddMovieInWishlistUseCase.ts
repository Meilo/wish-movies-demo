import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import { AddMovieInWishlistUseCaseMethods } from "./methodes";

export default class AddMovieInWishlistUseCase
  implements AddMovieInWishlistUseCaseMethods
{
  constructor(
    private isPresent: boolean,
    private addMovie: () => Promise<{ statusCode: number } | void>,
    private presenter: WishlistPresenter
  ) {}

  async execute(): Promise<string> {
    if (this.isPresent)
      return this.presenter.showErrorMessage("whislist.movieAlreadyExist");
    const result = await this.addMovie();
    if (result?.statusCode === 200)
      return this.presenter.showSuccessMessage("wishlist.movieAddWithSuccess");
    return this.presenter.showErrorMessage("wishlist.default");
  }
}
