import { imagePath, truncate } from "core/domain/helpers";
import { WishlistPresentation } from "../models/presenters/wishlistPresentation";
import { WishlistRepositories } from "../models/repositories/wishlistRepositories";
import { WishlistUseCase } from "../models/usecases/wishlistUseCase";

export default class GetWishlistUseCase implements WishlistUseCase {
  constructor(private wishlistRepository: WishlistRepositories) {}

  async execute(presenter: WishlistPresentation) {
    presenter.displayWishlistLoading();
    const wishlist = await this.wishlistRepository.getMyWishlist();
    if (wishlist) {
      presenter.displayWishlist({
        id: wishlist.id,
        name: wishlist.name,
        movies: await Promise.all(
          wishlist.items.map(async (movie) => ({
            id: movie.id,
            title: movie.title,
            poster: imagePath(movie.poster_path),
            overview: truncate(movie.overview),
            isInWishlist: await this.wishlistRepository.getItemStatusInWishlist(
              movie.id
            ),
          }))
        ),
      });
    }
  }
}
