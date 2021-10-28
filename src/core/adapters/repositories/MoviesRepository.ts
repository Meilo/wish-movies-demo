import { MoviesRepositories } from "core/adapters/types";

export default class MoviesRepository {
  constructor(private repositories: MoviesRepositories) {}

  getItemStatusInWishlist(movieId: number) {
    return this.repositories.getItemStatusInWishlist(movieId);
  }

  getDiscoverMovies() {
    return this.repositories.getDiscoverMovies();
  }

  getMovieById(movieId: number) {
    return this.repositories.getMovieById(movieId);
  }
}
