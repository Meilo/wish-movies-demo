import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistRepository as repository } from "view/api/repositories";
import {
  WishlistPresenter,
  vm,
} from "adapter/presenters/fixtures/wishlistPresenter";
import RemoveMovieInWishlistUseCase from "../RemoveMovieInWishlistUseCase";

jest.mock("view/api/repositories");

const Presenter = WishlistPresenter;

describe("RemoveMovieInWishlistUseCase", () => {
  it("Should return an error message if movie is not in the wishlist", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(333, Presenter);
    expect(vm.msg).toBe("wishlist.movieNotFound");
  });
  it("Should return a success message if movie is removed in wishlist", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(vm.msg).toBe("wishlist.movieHasBeenRemoved");
  });
  it("Should return an error message if movie not removed in the wishlist", async () => {
    const wishlistRepository = new WishlistRepository({
      ...repository,
      removeMovieInWishlist: () => Promise.resolve({ statusCode: 400 }),
    });
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(vm.msg).toBe("wishlist.error");
  });
});
