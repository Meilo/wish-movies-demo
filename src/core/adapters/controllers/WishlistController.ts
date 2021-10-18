import {
  GetWishlistUseCase,
  AddMovieInWishlistUseCase,
  RemoveMovieInWishlistUseCase,
} from "core/domain/usecases";
import WishlistPresenter from "../presenters/WishlistPresenter";
import { WishlistMethods } from "./methods";

export default class WishlistController implements WishlistMethods {
  constructor(
    private usecases: {
      getWishlistUseCase: GetWishlistUseCase;
      addMovieInWishlistUseCase: AddMovieInWishlistUseCase;
      removeMovieInWishlistUseCase: RemoveMovieInWishlistUseCase;
    },
    private wishlistPresenter: WishlistPresenter
  ) {}

  async fetchWishlist() {
    await this.usecases.getWishlistUseCase.execute(this.wishlistPresenter);
  }

  async addMovieInWishlist(movieId: number) {
    await this.usecases.addMovieInWishlistUseCase.execute(
      movieId,
      this.wishlistPresenter
    );
  }

  async removeMovieInWishlist(movieId: number) {
    await this.usecases.removeMovieInWishlistUseCase.execute(
      movieId,
      this.wishlistPresenter
    );
  }
}
