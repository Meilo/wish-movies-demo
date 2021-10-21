import {
  GetWishlistUseCase,
  AddMovieInWishlistUseCase,
  RemoveMovieInWishlistUseCase,
} from "core/domain/usecases";
import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import Controller from "./Controller";

interface WishlistMethods {
  add(movieId: number): Promise<void>;
  remove(movieId: number): Promise<void>;
}

export default class WishlistController implements WishlistMethods, Controller {
  constructor(
    private usecases: {
      getWishlistUseCase: GetWishlistUseCase;
      addMovieInWishlistUseCase: AddMovieInWishlistUseCase;
      removeMovieInWishlistUseCase: RemoveMovieInWishlistUseCase;
    },
    private wishlistPresenter: WishlistPresenter
  ) {}

  async retreive() {
    await this.usecases.getWishlistUseCase.execute(this.wishlistPresenter);
  }

  async add(movieId: number) {
    await this.usecases.addMovieInWishlistUseCase.execute(
      movieId,
      this.wishlistPresenter
    );
  }

  async remove(movieId: number) {
    await this.usecases.removeMovieInWishlistUseCase.execute(
      movieId,
      this.wishlistPresenter
    );
  }
}
