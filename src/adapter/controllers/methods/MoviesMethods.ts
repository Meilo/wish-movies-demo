import { MovieTransformed, Movie } from "domain/models";

export interface MoviesMethods {
  getMovies(
    limit: number | undefined
  ): Promise<ReadonlyArray<MovieTransformed> | undefined>;
  getMovie(
    toTransformed: boolean | undefined,
    withBackDropImage: boolean | undefined,
    movieId: number
  ): Promise<Movie | MovieTransformed>;
}
