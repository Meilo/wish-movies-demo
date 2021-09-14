import { GetWishlistUseCase, AddMovieInWishlistUseCase } from "domain/usecases";
import WishlistPresenter from "../presenters/WishlistPresenter";
import { WishlistMethods } from "./methods";

export default class WishlistController
  extends WishlistPresenter
  implements WishlistMethods
{
  constructor(
    private usecases: {
      getWishlistUseCase: GetWishlistUseCase;
      addMovieInWishlistUseCase: AddMovieInWishlistUseCase;
    },
    private wishlistPresenter: WishlistPresenter
  ) {
    super();
  }

  async getWishlist() {
    return await this.usecases.getWishlistUseCase.execute(
      this.wishlistPresenter
    );
  }

  async addMovieInWishlist(movieId: number) {
    return await this.usecases.addMovieInWishlistUseCase.execute(
      movieId,
      this.wishlistPresenter
    );
  }
}
