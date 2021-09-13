import { GetWishlistUseCase, AddMovieInWishlistUseCase } from "domain/usecases";
import WishlistPresenter from "../presenters/WishlistPresenter";
import { WishlistMethods } from "./methods";

export default class Wishlist implements WishlistMethods {
  constructor(private request: Function) {}

  async getWishlist() {
    const wishlist = await this.request();
    const usecase = new GetWishlistUseCase(wishlist, new WishlistPresenter());
    return usecase.execute();
  }

  async addMovieInWishlist(movieId: number) {
    const isPresent = await this.request(movieId);
    const usecase = new AddMovieInWishlistUseCase(
      isPresent,
      () => Promise.resolve({ statusCode: 200 }), // Todo: implement addMovie
      new WishlistPresenter()
    );
    return await usecase.execute();
  }
}
