import WishlistRepository from "adapter/repositories/WishlistRepository";
import { wishlistRepository } from "view/api/repositories";
import GetWishlistUseCase from "../GetWishlistUseCase";
import {
  WishlistPresenter,
  vm,
} from "adapter/presenters/fixtures/wishlistPresenter";

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
const Presenter = WishlistPresenter;

describe("GetWishlistUseCase", () => {
  const usecase = new GetWishlistUseCase(repository);
  it("Should return a wishlist", async () => {
    const presenter = {
      ...Presenter,
      displayWishlist() {
        vm.wishlist = fixtures;
        vm.loading = false;
      },
    };
    await usecase.execute(presenter);
    expect(vm.wishlist).toStrictEqual(fixtures);
    expect(vm.loading).toBeFalsy();
  });
});
