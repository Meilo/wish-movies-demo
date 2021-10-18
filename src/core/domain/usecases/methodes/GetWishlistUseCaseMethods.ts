import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";

export interface GetWishlistUseCaseMethods {
  execute(presenter: WishlistPresenter): Promise<void>;
}
