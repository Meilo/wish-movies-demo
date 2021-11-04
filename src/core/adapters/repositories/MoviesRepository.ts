import { MoviesRepositories } from "core/domain/models/repositories/moviesRepositories";

export default class MoviesRepository implements MoviesRepositories {
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
