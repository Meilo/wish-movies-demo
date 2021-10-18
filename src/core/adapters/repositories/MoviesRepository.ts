import { Movie } from "core/domain/models";
import { MoviesRepositoryMethods } from "./methods/MoviesRepositoryMethods";

export default class MoviesRepository implements MoviesRepositoryMethods {
  constructor(private repositories: MoviesRepositoryMethods) {}

  getDiscoverMovies(): Promise<ReadonlyArray<Movie>> {
    return this.repositories.getDiscoverMovies();
  }

  getMovieById(movieId: number): Promise<Movie> {
    return this.repositories.getMovieById(movieId);
  }
}
