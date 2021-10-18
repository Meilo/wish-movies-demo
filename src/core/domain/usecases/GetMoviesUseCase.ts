import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import MoviesRepository from "core/adapters/repositories/MoviesRepository";
import { truncate, imagePath } from "core/domain/helpers";
import { Movie } from "../models";

interface GetMoviesUseCaseType {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter
  ): Promise<void>;
}

export default class GetMoviesUseCase implements GetMoviesUseCaseType {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(
    limit: number | undefined = undefined,
    withBackDropImage: boolean | undefined = false,
    presenter: MoviesPresenter
  ): Promise<void> {
    presenter.displayMoviesLoading();
    const movies = await this.moviesRepository.getDiscoverMovies();
    const nbItems: number = limit || movies.length;
    if (movies?.length > 0) {
      const moviesTransformed = movies
        .slice(0, nbItems)
        .map((movie: Movie) => ({
          id: movie.id,
          title: movie.title,
          poster: withBackDropImage
            ? imagePath(movie.backdrop_path)
            : imagePath(movie.poster_path),
          overview: truncate(movie.overview),
        }));
      presenter.displayMovies(moviesTransformed);
    }
  }
}
