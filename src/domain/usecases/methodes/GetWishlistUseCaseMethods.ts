import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import { WishlistTransformed } from "../../models";

export interface GetWishlistUseCaseMethods {
  execute(presenter: WishlistPresenter): Promise<void>;
}
