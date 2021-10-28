import WishlistPresenter from "core/adapters/presenters/WishlistPresenter";
import { WishlistRepositories } from "core/adapters/types";
import { imagePath } from "core/domain/helpers";

interface GetWishlistUseCaseInterface {
  execute(presenter: WishlistPresenter): Promise<void>;
}

export default class GetWishlistUseCase implements GetWishlistUseCaseInterface {
  constructor(private wishlistRepository: WishlistRepositories) {}

  async execute(presenter: WishlistPresenter) {
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
            overview: movie.overview,
            isInWishlist: await this.wishlistRepository.getItemStatusInWishlist(
              movie.id
            ),
          }))
        ),
      });
    }
  }
}
