import { WishlistTransformed } from "core/domain/models";

export interface WishlistPresenterMethods {
  displayWishlistLoading(): void;
  displayWishlist(wishlist: WishlistTransformed): void;
  displayMessage(msg: string): void;
}
