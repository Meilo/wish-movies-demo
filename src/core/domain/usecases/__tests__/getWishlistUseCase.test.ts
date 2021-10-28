import { wishlistRepository } from "ui/api/repositories";
import { WishlistBuilder } from "core/domain/builders/WishlistBuilder";
import GetWishlistUseCase from "../GetWishlistUseCase";

jest.mock("ui/api/repositories");

const fixtures = {
  id: 1,
  name: "myWishlist",
  movies: [
    {
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      overview: "bla",
      isInWishlist: true,
    },
  ],
};

const repository = WishlistBuilder.repositories(wishlistRepository);
const Presenter = WishlistBuilder.presenter;

describe("GetWishlistUseCase", () => {
  const usecase = new GetWishlistUseCase(repository);
  it("Should return a wishlist", async () => {
    await usecase.execute(Presenter);
    expect(Presenter.vm.wishlist).toStrictEqual(fixtures);
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
