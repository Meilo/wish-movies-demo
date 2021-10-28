import { wishlistRepository as repository } from "ui/api/repositories";
import { WishlistBuilder } from "core/domain/builders/WishlistBuilder";
import RemoveMovieInWishlistUseCase from "../RemoveMovieInWishlistUseCase";

jest.mock("ui/api/repositories");

const Presenter = WishlistBuilder.presenter;

describe("RemoveMovieInWishlistUseCase", () => {
  it("Should return an error message if movie is not in the wishlist", async () => {
    const wishlistRepository = WishlistBuilder.repositories(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(333, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieNotFound");
  });
  it("Should return a success message if movie is removed in wishlist", async () => {
    const wishlistRepository = WishlistBuilder.repositories(repository);
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieHasBeenRemoved");
  });
  it("Should return an error message if movie not removed in the wishlist", async () => {
    const wishlistRepository = WishlistBuilder.repositories({
      ...repository,
      removeMovieInWishlist: () => Promise.resolve({ statusCode: 400 }),
    });
    const usecase = new RemoveMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.error");
  });
});
