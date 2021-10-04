import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistRepository as repository } from "view/api/repositories";
import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import AddMovieInWishlistUseCase from "../AddMovieInWishlistUseCase";

jest.mock("view/api/repositories");

const Presenter = new WishlistPresenter();

describe("AddMovieInWishlistUseCase", () => {
  it("Should return an error message if movie is present in wishlist", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(1, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieAlreadyExist");
    expect(Presenter.vm.loading).toBeFalsy();
  });
  it("Should return a success message if movie add to wishlist ", async () => {
    const wishlistRepository = new WishlistRepository(repository);
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(3333, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.movieAddWithSuccess");
    expect(Presenter.vm.loading).toBeFalsy();
  });
  it("Should return an error message if movie not add to wishlist", async () => {
    const wishlistRepository = new WishlistRepository({
      ...repository,
      addMovieInWishlist: () => Promise.resolve({ statusCode: 404 }),
    });
    const usecase = new AddMovieInWishlistUseCase(wishlistRepository);
    await usecase.execute(3333, Presenter);
    expect(Presenter.vm.msg).toBe("wishlist.error");
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
