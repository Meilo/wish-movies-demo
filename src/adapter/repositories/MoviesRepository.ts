import { Movie } from "domain/models/movie";
import { MoviesRepositoryMethods } from "./methods/MoviesRepositoryMethods";

export default class MoviesRepository implements MoviesRepositoryMethods {
  constructor(private request: Function) {}

  getDiscoverMovies(): Promise<ReadonlyArray<Movie>> {
    return this.request();
  }

  getMovieById(movieId: number): Promise<Movie> {
    return this.request(movieId);
  }
}
