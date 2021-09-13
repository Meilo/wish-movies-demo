import { Movie } from "domain/models";

export interface MoviesRepositoryMethods {
  getDiscoverMovies(): Promise<ReadonlyArray<Movie>>;
  getMovieById(movieId: number): Promise<Movie>;
}
