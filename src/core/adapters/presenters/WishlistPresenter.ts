import { WishlistTransformed } from "core/domain/models";
import { WishlistPresentation } from "core/domain/models/presenters/wishlistPresentation";
import Presenter from "./Presenter";

export class WishlistPresenterVM {
  loading = true;
  msg?: string;
  wishlist?: WishlistTransformed;
}

export default class WishlistPresenter
  extends Presenter<WishlistPresenterVM>
  implements WishlistPresentation
{
  constructor() {
    super(new WishlistPresenterVM());
  }

  displayWishlistLoading(): void {
    this.vm.loading = true;
  }

  displayWishlist(wishlist: WishlistTransformed): void {
    this.vm.wishlist = wishlist;
    this.vm.loading = false;
  }

  displayMessage(msg: string): void {
    this.vm.msg = msg;
    this.vm.loading = false;
  }
}
