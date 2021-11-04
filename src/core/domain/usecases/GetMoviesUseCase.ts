import { truncate, imagePath } from "core/domain/helpers";
import { Movie } from "../models";
import { MoviesRepositories } from "../models/repositories/moviesRepositories";
import { MoviesUseCase, ExecuteProps } from "../models/usecases/moviesUseCase";

export default class GetMoviesUseCase implements MoviesUseCase {
  constructor(private moviesRepository: MoviesRepositories) {}

  async execute({
    limit = undefined,
    withBackDropImage = false,
    presenter,
  }: ExecuteProps) {
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
