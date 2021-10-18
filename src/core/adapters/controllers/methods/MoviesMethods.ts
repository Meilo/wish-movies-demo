export interface MoviesMethods {
  fetchMovies({
    limit,
    toTransformed,
    withBackDropImage,
    movieId,
  }: {
    limit: number | undefined;
    toTransformed?: boolean;
    withBackDropImage?: boolean;
    movieId: number;
  }): void;
}
