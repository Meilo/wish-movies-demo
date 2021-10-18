import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";

export interface AddMovieInWishlistUseCaseMethods {
  execute(movieId: number, presenter: WishlistPresenter): Promise<void>;
}
