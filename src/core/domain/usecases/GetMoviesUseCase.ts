import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import { MoviesRepositories } from "core/adapters/types";
import { truncate, imagePath } from "core/domain/helpers";
import { Movie } from "../models";

interface GetMoviesUseCaseInterface {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter
  ): Promise<void>;
}

export default class GetMoviesUseCase implements GetMoviesUseCaseInterface {
  constructor(private moviesRepository: MoviesRepositories) {}

  async execute(
    limit: number | undefined = undefined,
    withBackDropImage: boolean | undefined = false,
    presenter: MoviesPresenter
  ): Promise<void> {
    presenter.displayMoviesLoading();
    const movies = await this.moviesRepository.getDiscoverMovies();
    const nbItems: number = limit || movies.length;
    if (movies?.length > 0) {
      const moviesSlice = movies.slice(0, nbItems);
      const moviesTransformed = await Promise.all(
        moviesSlice.map(async (movie: Movie) => ({
          id: movie.id,
          title: movie.title,
          poster: withBackDropImage
            ? imagePath(movie.backdrop_path)
            : imagePath(movie.poster_path),
          overview: truncate(movie.overview),
          isInWishlist: await this.moviesRepository.getItemStatusInWishlist(
            movie.id
          ),
        }))
      );
      presenter.displayMovies(moviesTransformed);
    }
  }
}
