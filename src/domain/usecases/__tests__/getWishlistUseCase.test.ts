import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import GetWishlistUseCase from "../GetWishlistUseCase";
import { Movies } from "../../fixtures";

describe("GetWishlistUseCase", () => {
  const wishlist = new GetWishlistUseCase(
    {
      id: 1,
      name: "myWishlist",
      items: [Movies[0]],
    },
    new WishlistPresenter()
  );
  it("Should return id of wishlist", () => {
    const result = wishlist.execute();
    expect(result.id).toBe(1);
  });
  it("Should return name of wishlist", () => {
    const result = wishlist.execute();
    expect(result.name).toBe("myWishlist");
  });
  it("Should return movies transformed of wishlist", () => {
    const result = wishlist.execute();
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
