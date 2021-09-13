import { MovieTransformed, Movie } from "domain/models";

export interface MoviesMethods {
  getMovies(
    limit: number | undefined
  ): Promise<ReadonlyArray<MovieTransformed> | undefined>;
  getMovie(
    toTransformed: boolean | undefined
  ): Promise<Movie | MovieTransformed>;
}
