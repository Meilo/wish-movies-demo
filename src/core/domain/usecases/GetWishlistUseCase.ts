import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import WishlistRepository from "core/adapters/repositories/WishlistRepository";
import { imagePath } from "core/domain/helpers";
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