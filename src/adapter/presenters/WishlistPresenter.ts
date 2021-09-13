import { Wishlist, WishlistTransformed } from "domain/models";
import { WishlistPresenterMethods } from "./methods/wishlistPresenterMethods";
import MoviesPresenter from "./MoviesPresenter";
import Presenter from ".";

export default class WishlistPresenter
  extends Presenter
  implements WishlistPresenterMethods
{
  show(wishlist: Wishlist): WishlistTransformed {
    const moviesPresenter = new MoviesPresenter();
    return {
      id: wishlist.id,
      name: wishlist.name,
      movies: moviesPresenter.show(wishlist.items),
    };
  }
}
