import WishlistPresenter from "adapter/presenters/WishlistPresenter";
import WishlistRepository from "adapter/repositories/WishlistRepository";
import { imagePath } from "domain/helpers";
import { GetWishlistUseCaseMethods } from "./methodes";

export default class GetWishlistUseCase implements GetWishlistUseCaseMethods {
  constructor(private wishlistRepository: WishlistRepository) {}

  async execute(presenter: WishlistPresenter) {
    presenter.displayWishlistLoading();
    const wishlist = await this.wishlistRepository.getMyWishlist();
    if (wishlist) {
      presenter.displayWishlist({
        id: wishlist.id,
        name: wishlist.name,
        movies: wishlist.items.map((movie) => ({
          id: movie.id,
          title: movie.title,
          poster: imagePath(movie.poster_path),
          overview: movie.overview,
        })),
      });
    }
  }
}
