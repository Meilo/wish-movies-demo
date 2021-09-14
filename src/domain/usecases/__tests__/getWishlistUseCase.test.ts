import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import GetWishlistUseCase from "../GetWishlistUseCase";
import getMyWishlist from "view/api/__mocks__/getMyWishlist";
import getItemStatusInWishlist from "view/api/__mocks__/getItemStatusInWishlist";

const wishlistRepository = new WishlistRepository({
  getMyWishlist,
  getItemStatusInWishlist,
  addMovieInWishlist: () => Promise.resolve({ statusCode: 200 }),
});

describe("GetWishlistUseCase", () => {
  const wishlist = new GetWishlistUseCase(wishlistRepository);
  it("Should return id of wishlist", async () => {
    const result = await wishlist.execute(new WishlistPresenter());
    expect(result.id).toBe(1);
  });
  it("Should return name of wishlist", async () => {
    const result = await wishlist.execute(new WishlistPresenter());
    expect(result.name).toBe("myWishlist");
  });
  it("Should return movies transformed of wishlist", async () => {
    const result = await wishlist.execute(new WishlistPresenter());
    expect(result.movies).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
    ]);
  });
});
