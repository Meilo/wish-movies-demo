import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import { GetWishlistUseCaseMethods } from "./methodes";
import { Wishlist } from "../models";

export default class GetWishlistUseCase implements GetWishlistUseCaseMethods {
  constructor(
    private repository: Wishlist,
    private presenter: WishlistPresenter
  ) {}

  execute() {
    return this.presenter.show(this.repository);
  }
}
