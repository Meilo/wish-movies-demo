import { WishlistTransformed } from "../wishlistTransformed";

export interface WishlistPresentation {
  displayWishlistLoading(): void;
  displayWishlist(wishlist: WishlistTransformed): void;
  displayMessage(msg: string): void;
}
