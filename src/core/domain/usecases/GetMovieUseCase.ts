import { truncate, imagePath } from "core/domain/helpers";
import { MoviesRepositories } from "../models/repositories/moviesRepositories";
import { MoviesUseCase, ExecuteProps } from "../models/usecases/moviesUseCase";

export default class GetMovieUseCase implements MoviesUseCase {
  constructor(private movieRepository: MoviesRepositories) {}

  async execute({
    toTransformed = false,
    withBackDropImage = true,
    presenter,
    movieId,
  }: ExecuteProps) {
    presenter.displayMoviesLoading();
    const movie = movieId && (await this.movieRepository.getMovieById(movieId));
    if (movie) {
      const isInWishlist = await this.movieRepository.getItemStatusInWishlist(
        movie.id
      );
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
              isInWishlist,
            },
          ]
        : [
            {
              ...movie,
              poster: posterType,
              isInWishlist,
            },
          ];
      presenter.displayMovies(newMovie);
    }
  }
}
