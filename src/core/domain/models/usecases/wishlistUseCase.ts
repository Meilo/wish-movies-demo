import { WishlistPresentation } from "../presenters/wishlistPresentation";

export interface WishlistUseCase {
  execute(presenter: WishlistPresentation, movieId?: number): Promise<void>;
}
