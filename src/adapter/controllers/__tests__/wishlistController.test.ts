import { Wishlist } from "..";
import getMyWishlist from "view/api/__mocks__/getMyWishlist";
import getItemStatusInWishlist from "view/api/__mocks__/getItemStatusInWishlist";

describe("Wishlist", () => {
  it("Should return a wishlist", async () => {
    const wishlist = new Wishlist(getMyWishlist);
    const result = await wishlist.getWishlist();
    expect(result).toStrictEqual({
      id: 1,
      name: "myWishlist",
      movies: [
        {
          id: 1,
          title: "Naruto",
          poster:
            "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
          overview: "bla",
        },
      ],
    });
  });
  it("Sould add a movie in wishlist", async () => {
    const wishlist = new Wishlist(getItemStatusInWishlist);
    const result = await wishlist.addMovieInWishlist(300);
    expect(result).toBe("wishlist.movieAddWithSuccess");
  });
  it("Sould return an error if movie is already in wishlist", async () => {
    const wishlist = new Wishlist(getItemStatusInWishlist);
    const result = await wishlist.addMovieInWishlist(1);
    expect(result).toBe("whislist.movieAlreadyExist");
  });
});
