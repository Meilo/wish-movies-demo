import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import { MoviesRepositories } from "core/adapters/types";
import { truncate, imagePath } from "core/domain/helpers";

interface GetMovieUseCaseInterface {
  execute(
    toTransformed: boolean | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<void>;
}

export default class GetMovieUseCase implements GetMovieUseCaseInterface {
  constructor(private movieRepository: MoviesRepositories) {}

  async execute(
    toTransformed: boolean,
    withBackDropImage: boolean,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<void> {
    presenter.displayMoviesLoading();
    const movie = await this.movieRepository.getMovieById(movieId);
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
