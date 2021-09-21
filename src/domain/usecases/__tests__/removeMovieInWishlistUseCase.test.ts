import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistReposiortyMock } from "view/api/__mocks__/repositories";
import RemoveMovieInWishlistUseCase from "../RemoveMovieInWishlistUseCase";

const wishlistRepository = new WishlistRepository(wishlistReposiortyMock);

describe("RemoveMovieInWishlistUseCase", () => {
  const removeMovieInWishlistUseCase = new RemoveMovieInWishlistUseCase(
    wishlistRepository,
    new WishlistPresenter()
  );
  it("Should return an error message if movie is not in the wishlist", async () => {
    expect(await removeMovieInWishlistUseCase.execute(333)).toStrictEqual({
      message: "wishlist.movieNotFound",
      type: "error",
    });
  });
  it("Should return a success message if movie is remove in wishlist", async () => {
    expect(await removeMovieInWishlistUseCase.execute(1)).toStrictEqual({
      message: "wishlist.movieRemovedWithSuccess",
      type: "success",
    });
  });
  it("Should return an error message if movie not removed in the wishlist", async () => {
    const wishlistRepository = new WishlistRepository({
      ...wishlistReposiortyMock,
      removeMovieInWishlist: () =>
        Promise.resolve({
          statusCode: 400,
        }),
    });
    const removeMovieInWishlistUseCase = new RemoveMovieInWishlistUseCase(
      wishlistRepository,
      new WishlistPresenter()
    );
    expect(await removeMovieInWishlistUseCase.execute(1)).toStrictEqual({
      message: "wishlist.default",
      type: "error",
    });
  });
});
