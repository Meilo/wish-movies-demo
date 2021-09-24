import { WishlistTransformed } from "domain/models";
import { WishlistPresenterMethods } from "./methods/wishlistPresenterMethods";
import Presenter from "./Presenter";

export class WishlistPresenterVM {
  loading = false;
  msg?: string;
  wishlist?: WishlistTransformed;
}

export default class WishlistPresenter
  extends Presenter<WishlistPresenterVM>
  implements WishlistPresenterMethods
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
