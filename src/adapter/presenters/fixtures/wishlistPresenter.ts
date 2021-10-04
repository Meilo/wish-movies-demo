import { WishlistTransformed } from "domain/models";

export const vm: {
  loading: boolean;
  msg?: string;
  wishlist?: WishlistTransformed;
} = { loading: false, msg: undefined, wishlist: undefined };

export const wishlistPresenter = {
  displayWishlistLoading() {
    vm.loading = true;
  },
  displayWishlist(wishlist: WishlistTransformed) {
    vm.wishlist = wishlist;
    vm.loading = false;
  },
  displayMessage(msg: string): void {
    this.vm.msg = msg;
    this.vm.loading = false;
  },
  vm,
};
