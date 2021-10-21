import { MoviesRepositories } from "core/adapters/types";

export default class MoviesRepository {
  constructor(private repositories: MoviesRepositories) {}

  getDiscoverMovies() {
    return this.repositories.getDiscoverMovies();
  }

  getMovieById(movieId: number) {
    return this.repositories.getMovieById(movieId);
  }
}
