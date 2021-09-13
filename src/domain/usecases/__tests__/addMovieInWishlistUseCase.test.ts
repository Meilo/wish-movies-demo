import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import AddMovieInWishlistUseCase from "../AddMovieInWishlistUseCase";

describe("AddMovieInWishlistUseCase", () => {
  it("Should return a success message if movie add to wishlist", async () => {
    const addMovie = () => {
      return Promise.resolve({
        statusCode: 200,
      });
    };
    const wishlist = new AddMovieInWishlistUseCase(
      false,
      addMovie,
      new WishlistPresenter()
    );
    expect(await wishlist.execute()).toBe("wishlist.movieAddWithSuccess");
  });
  it("Should return an error message if movie is present in wishlist", async () => {
    const addMovie = () => {
      return Promise.resolve({
        statusCode: 200,
      });
    };
    const wishlist = new AddMovieInWishlistUseCase(
      true,
      addMovie,
      new WishlistPresenter()
    );
    expect(await wishlist.execute()).toBe("whislist.movieAlreadyExist");
  });
  it("Should return a error message if movie not add to wishlist", async () => {
    const addMovie = () => {
      return Promise.resolve();
    };
    const wishlist = new AddMovieInWishlistUseCase(
      false,
      addMovie,
      new WishlistPresenter()
    );
    expect(await wishlist.execute()).toBe("wishlist.default");
  });
});
