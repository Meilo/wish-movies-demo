import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import getItemStatusInWishlist from "view/api/__mocks__/getItemStatusInWishlist";
import getMyWishlist from "view/api/__mocks__/getMyWishlist";
import AddMovieInWishlistUseCase from "../AddMovieInWishlistUseCase";

const repositories = {
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist: () => Promise.resolve({ statusCode: 200 }),
};

const wishlistRepository = new WishlistRepository(repositories);

describe("AddMovieInWishlistUseCase", () => {
  const wishlist = new AddMovieInWishlistUseCase(wishlistRepository);
  it("Should return an error message if movie is present in wishlist", async () => {
    expect(await wishlist.execute(1, new WishlistPresenter())).toBe(
      "wishlist.movieAlreadyExist"
    );
  });
  it("Should return a success message if movie add to wishlist ", async () => {
    expect(await wishlist.execute(333, new WishlistPresenter())).toBe(
      "wishlist.movieAddWithSuccess"
    );
  });
  it("Should return a error message if movie not add to wishlist", async () => {
    const wishlistRepositoryDefault = new WishlistRepository({
      ...repositories,
      addMovieInWishlist: () => Promise.resolve({ statusCode: 400 }),
    });
    const wishlistDefault = new AddMovieInWishlistUseCase(
      wishlistRepositoryDefault
    );
    expect(await wishlistDefault.execute(333, new WishlistPresenter())).toBe(
      "wishlist.default"
    );
  });
});
