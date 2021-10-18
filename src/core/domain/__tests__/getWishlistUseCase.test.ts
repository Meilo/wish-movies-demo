import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import { wishlistRepository } from "ui/api/repositories";
import GetWishlistUseCase from "../usecases/GetWishlistUseCase";
import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";

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
