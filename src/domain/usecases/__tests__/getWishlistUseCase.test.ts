import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistReposiortyMock } from "view/api/fixtures/repositories";
import GetWishlistUseCase from "../GetWishlistUseCase";

const wishlistRepository = new WishlistRepository(wishlistReposiortyMock);

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
