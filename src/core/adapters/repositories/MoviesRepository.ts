import { Movie } from "core/domain/models";

interface MoviesRepositoryType {
  getDiscoverMovies(): Promise<ReadonlyArray<Movie>>;
  getMovieById(movieId: number): Promise<Movie>;
}

export default class MoviesRepository implements MoviesRepositoryType {
  constructor(private repositories: MoviesRepositoryType) {}

  getDiscoverMovies(): Promise<ReadonlyArray<Movie>> {
    return this.repositories.getDiscoverMovies();
  }

  getMovieById(movieId: number): Promise<Movie> {
    return this.repositories.getMovieById(movieId);
  }
}
