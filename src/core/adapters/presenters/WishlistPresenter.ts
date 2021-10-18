import { WishlistTransformed } from "core/domain/models";
import Presenter from "./Presenter";

interface WishlistPresenterType {
  displayWishlistLoading(): void;
  displayWishlist(wishlist: WishlistTransformed): void;
  displayMessage(msg: string): void;
}

export class WishlistPresenterVM {
  loading = false;
  msg?: string;
  wishlist?: WishlistTransformed;
}

export default class WishlistPresenter
  extends Presenter<WishlistPresenterVM>
  implements WishlistPresenterType
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
