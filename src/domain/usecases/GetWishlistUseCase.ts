import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { GetWishlistUseCaseMethods } from "./methodes";

export default class GetWishlistUseCase implements GetWishlistUseCaseMethods {
  constructor(private wishlistRepository: WishlistRepository) {}

  async execute(presenter: WishlistPresenter) {
    return presenter.show(await this.wishlistRepository.getMyWishlist());
  }
}
