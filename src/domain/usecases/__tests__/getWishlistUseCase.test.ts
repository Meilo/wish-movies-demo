import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistRepository } from "view/api/repositories";
import GetWishlistUseCase from "../GetWishlistUseCase";
import WishlistPresenter from "adapter/presenters/WishlistPresenter";

jest.mock("view/api/repositories");

const fixtures = {
  id: 1,
  name: "myWishlist",
  movies: [
    {
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      overview: "bla",
    },
  ],
};

const repository = new WishlistRepository(wishlistRepository);
const Presenter = new WishlistPresenter();

describe("GetWishlistUseCase", () => {
  const usecase = new GetWishlistUseCase(repository);
  it("Should return a wishlist", async () => {
    await usecase.execute(Presenter);
    expect(Presenter.vm.wishlist).toStrictEqual(fixtures);
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
