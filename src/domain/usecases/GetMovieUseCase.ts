import { MoviesPresenter } from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { truncate, imagePath } from "domain/helpers";
import { GetMovieUseCaseMethods } from "./methodes";

export default class GetMovieUseCase implements GetMovieUseCaseMethods {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(
    toTransformed: boolean | undefined = true,
    withBackDropImage: boolean | undefined = false,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<void> {
    presenter.displayMoviesLoading();
    const movie = await this.movieRepository.getMovieById(movieId);
    if (movie) {
      const newMovie = toTransformed
        ? [
            {
              id: movie.id,
              title: movie.title,
              poster: withBackDropImage
                ? imagePath(movie.backdrop_path)
                : imagePath(movie.poster_path),
              overview: truncate(movie.overview),
            },
          ]
        : [
            {
              ...movie,
              poster: withBackDropImage
                ? imagePath(movie.backdrop_path)
                : imagePath(movie.poster_path),
            },
          ];
      presenter.displayMovies(newMovie);
    }
  }
}
