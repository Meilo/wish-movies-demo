import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { truncate, imagePath } from "domain/helpers";
import { GetMovieUseCaseMethods } from "./methodes";

export default class GetMovieUseCase implements GetMovieUseCaseMethods {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(
    toTransformed: boolean,
    withBackDropImage: boolean,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<void> {
    presenter.displayMoviesLoading();
    const movie = await this.movieRepository.getMovieById(movieId);
    if (movie) {
      const posterType = withBackDropImage
        ? imagePath(movie.backdrop_path)
        : imagePath(movie.poster_path);
      const newMovie = toTransformed
        ? [
            {
              id: movie.id,
              title: movie.title,
              poster: posterType,
              overview: truncate(movie.overview),
            },
          ]
        : [
            {
              ...movie,
              poster: posterType,
            },
          ];
      presenter.displayMovies(newMovie);
    }
  }
}
