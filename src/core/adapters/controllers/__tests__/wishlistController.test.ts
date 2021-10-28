import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import {
  AddMovieInWishlistUseCase,
  GetWishlistUseCase,
  RemoveMovieInWishlistUseCase,
} from "core/domain/usecases";
import { wishlistRepository as repository } from "ui/api/repositories";
import { WishlistTransformed } from "ui/api/fixtures";
import { WishlistController } from "..";

jest.mock("ui/api/repositories");

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

describe("WishlistContoller", () => {
  it("Should fetch a wishlist", async () => {
    await controller.retreive();
    expect(wishlistPresenter.vm.wishlist).toStrictEqual(WishlistTransformed);
    expect(wishlistPresenter.vm.loading).toBe(false);
    expect(wishlistPresenter.vm.msg).toBe(undefined);
  });

  it("Should return an error if movie is present in wishlist", async () => {
    await controller.add(1);
    expect(wishlistPresenter.vm.msg).toBe("wishlist.movieAlreadyExist");
    expect(wishlistPresenter.vm.loading).toBe(false);
  });

  it("Should add a movie in the Wishlist", async () => {
    await controller.add(33);
    expect(wishlistPresenter.vm.msg).toBe("wishlist.movieAddWithSuccess");
    expect(wishlistPresenter.vm.loading).toBe(false);
  });

  it("Should return an error if movies does not present in the wishlist", async () => {
    await controller.remove(33);
    expect(wishlistPresenter.vm.msg).toBe("wishlist.movieNotFound");
    expect(wishlistPresenter.vm.loading).toBe(false);
  });

  it("Should remove a movie in the wishlist", async () => {
    await controller.remove(1);
    expect(wishlistPresenter.vm.msg).toBe("wishlist.movieHasBeenRemoved");
    expect(wishlistPresenter.vm.loading).toBe(false);
  });
});
