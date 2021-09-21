import { Wishlist, WishlistTransformed } from "domain/models";
import { WishlistPresenterMethods } from "./methods/wishlistPresenterMethods";
import Presenter from "./Presenter";

export class WishlistPresenterVM {
  loading = false;
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

  // show(wishlist: Wishlist): WishlistTransformed {
  //   const moviesPresenter = new MoviesPresenter();
  //   return {
  //     id: wishlist.id,
  //     name: wishlist.name,
  //     movies: moviesPresenter.displayMovies(wishlist.items),
  //   };
  // }
}
