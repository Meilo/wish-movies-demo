import WishlistPresenter from "adapter/presenters/WishlistPresenter";

export interface AddMovieInWishlistUseCaseMethods {
  execute(
    movieId: number,
    presenter: WishlistPresenter
  ): Promise<{ type: string; message: string }>;
}
