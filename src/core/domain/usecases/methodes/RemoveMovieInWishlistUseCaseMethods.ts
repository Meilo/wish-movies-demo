import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";

export interface RemoveMovieInWishlistUseCaseMethods {
  execute(movieId: number, presenter: WishlistPresenter): Promise<void>;
}
