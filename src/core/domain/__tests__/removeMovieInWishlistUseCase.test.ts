import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import { wishlistRepository as repository } from "ui/api/repositories";
import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import RemoveMovieInWishlistUseCase from "../usecases/RemoveMovieInWishlistUseCase";

jest.mock("ui/api/repositories");

const Presenter = new WishlistPresenter();

describe("RemoveMovieInWishlistUseCase", () => {
  it("Should return an error message if movie is not in the wishlist", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(333, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieNotFound");
  });
  it("Should return a success message if movie is removed in wishlist", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieHasBeenRemoved");
  });
  it("Should return an error message if movie not removed in the wishlist", async () => {
    const wishlistRepository = new WishlistRepository({
      ...repository,
      removeMovieInWishlist: () => Promise.resolve({ statusCode: 400 }),
    });
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.error");
  });
});
