import { wishlistRepository as repository } from "ui/api/repositories";
import { WishlistBuilder } from "./builders/WishlistBuilder";
import AddMovieInWishlistUseCase from "../AddMovieInWishlistUseCase";

jest.mock("ui/api/repositories");

const Presenter = WishlistBuilder.presenter;

describe("AddMovieInWishlistUseCase", () => {
  it("Should return an error message if movie is present in wishlist", async () => {
    const wishlistRepository = WishlistBuilder.repositories(repository);
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(Presenter, 1);
    expect(Presenter.vm.msg).toBe("wishlist.movieAlreadyExist");
    expect(Presenter.vm.loading).toBeFalsy();
  });
  it("Should return a success message if movie add to wishlist ", async () => {
    const wishlistRepository = WishlistBuilder.repositories(repository);
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(Presenter, 3333);
    expect(Presenter.vm.msg).toBe("wishlist.movieAddWithSuccess");
    expect(Presenter.vm.loading).toBeFalsy();
  });
  it("Should return an error message if movie not add to wishlist", async () => {
    const wishlistRepository = WishlistBuilder.repositories({
      ...repository,
      addMovieInWishlist: () => Promise.resolve({ statusCode: 404 }),
    });
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(Presenter, 3333);
    expect(Presenter.vm.msg).toBe("wishlist.error");
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
