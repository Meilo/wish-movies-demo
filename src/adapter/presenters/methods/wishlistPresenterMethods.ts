import { Wishlist, WishlistTransformed } from "domain/models";

export interface WishlistPresenterMethods {
  show(wishlist: Wishlist): WishlistTransformed;
}
