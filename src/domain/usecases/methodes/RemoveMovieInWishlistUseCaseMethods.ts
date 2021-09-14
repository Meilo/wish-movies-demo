import WishlistPresenter from "adapter/presenters/WishlistPresenter";

export interface RemoveMovieInWishlistUseCaseMethods {
  execute(
    movieId: number,
    presenter: WishlistPresenter
  ): Promise<{ type: string; message: string }>;
}
