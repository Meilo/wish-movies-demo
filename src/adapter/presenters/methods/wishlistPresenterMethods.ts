import { WishlistTransformed } from "domain/models";

export interface WishlistPresenterMethods {
  displayWishlistLoading(): void;
  displayWishlist(wishlist: WishlistTransformed): void;
}
