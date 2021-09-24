import { WishlistTransformed } from "domain/models";

export const vm: {
  loading: boolean;
  msg?: string;
  wishlist?: WishlistTransformed;
} = { loading: false, msg: undefined, wishlist: undefined };

export const WishlistPresenter = {
  displayWishlistLoading() {
    vm.loading = true;
  },
  displayWishlist() {
    vm.wishlist = undefined;
    vm.loading = false;
  },
  displayMessage(msg: string): void {
    this.vm.msg = msg;
    this.vm.loading = false;
  },
  vm,
};
