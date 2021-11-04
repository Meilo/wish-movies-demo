import {
  Controller,
  WishlistController as wishlistController,
} from "core/domain/models/controllers/contoller";
import { WishlistPresentation } from "core/domain/models/presenters/wishlistPresentation";
import { WishlistUseCase } from "core/domain/models/usecases/wishlistUseCase";

export default class WishlistController
  implements wishlistController, Controller
{
  constructor(
    private usecases: {
      getWishlistUseCase: WishlistUseCase;
      addMovieInWishlistUseCase: WishlistUseCase;
      removeMovieInWishlistUseCase: WishlistUseCase;
    },
    private wishlistPresenter: WishlistPresentation
  ) {}

  async retreive() {
    await this.usecases.getWishlistUseCase.execute(this.wishlistPresenter);
  }

  async add(movieId: number) {
    await this.usecases.addMovieInWishlistUseCase.execute(
      this.wishlistPresenter,
      movieId
    );
  }

  async remove(movieId: number) {
    await this.usecases.removeMovieInWishlistUseCase.execute(
      this.wishlistPresenter,
      movieId
    );
  }
}
