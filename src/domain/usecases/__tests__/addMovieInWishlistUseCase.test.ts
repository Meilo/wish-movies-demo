import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistReposiortyMock } from "view/api/__mocks__/repositories";
import AddMovieInWishlistUseCase from "../AddMovieInWishlistUseCase";

const wishlistRepository = new WishlistRepository(wishlistReposiortyMock);

describe("AddMovieInWishlistUseCase", () => {
  const wishlist = new AddMovieInWishlistUseCase(wishlistRepository);
  it("Should return an error message if movie is present in wishlist", async () => {
    expect(await wishlist.execute(1, new WishlistPresenter())).toStrictEqual({
      message: "wishlist.movieAlreadyExist",
      type: "error",
    });
  });
  it("Should return a success message if movie add to wishlist ", async () => {
    expect(await wishlist.execute(333, new WishlistPresenter())).toStrictEqual({
      message: "wishlist.movieAddWithSuccess",
      type: "success",
    });
  });
  it("Should return a error message if movie not add to wishlist", async () => {
    const wishlistRepositoryDefault = new WishlistRepository({
      ...wishlistReposiortyMock,
      addMovieInWishlist: () => Promise.resolve({ statusCode: 400 }),
    });
    const wishlistDefault = new AddMovieInWishlistUseCase(
      wishlistRepositoryDefault
    );
    expect(
      await wishlistDefault.execute(333, new WishlistPresenter())
    ).toStrictEqual({ message: "wishlist.default", type: "error" });
  });
});
