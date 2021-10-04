import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { truncate, imagePath } from "domain/helpers";
import { Movie } from "../models";
import { GetMoviesUseCaseMethods } from "./methodes";

export default class GetMoviesUseCase implements GetMoviesUseCaseMethods {
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
