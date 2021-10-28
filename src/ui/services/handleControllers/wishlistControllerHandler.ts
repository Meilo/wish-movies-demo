import { WishlistController } from "core/adapters/controllers";
import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import {
  AddMovieInWishlistUseCase,
  GetWishlistUseCase,
  RemoveMovieInWishlistUseCase,
} from "core/domain/usecases";
import { wishlistRepository as repository } from "ui/api/repositories";

const wishlistRepository = new WishlistRepository(repository);
const wishlistPresenter = new WishlistPresenter();
const controller = new WishlistController(
  {
    getWishlistUseCase: new GetWishlistUseCase(wishlistRepository),
    addMovieInWishlistUseCase: new AddMovieInWishlistUseCase(
      wishlistRepository
    ),
    removeMovieInWishlistUseCase: new RemoveMovieInWishlistUseCase(
      wishlistRepository
    ),
  },
  wishlistPresenter
);

const wishlistControllerHandler = {
  controller,
  vm: wishlistPresenter.vm,
};

export default wishlistControllerHandler;
