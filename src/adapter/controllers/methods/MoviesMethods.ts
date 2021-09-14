import { MovieTransformed, Movie } from "domain/models";

export interface MoviesMethods {
  getMovies(
    limit: number | undefined
  ): Promise<MovieTransformed | readonly MovieTransformed[] | Movie>;
  getMovie({
    toTransformed,
    withBackDropImage,
    movieId,
  }: {
    toTransformed?: boolean;
    withBackDropImage?: boolean;
    movieId: number;
  }): Promise<MovieTransformed | readonly MovieTransformed[] | Movie>;
}
