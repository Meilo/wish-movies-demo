import { MovieTransformed, Movie } from "domain/models";

export interface MoviesPresenterMethods {
  isLoading: boolean;
  isLoadingHandler(status: boolean): void;
  show(
    untransformedMovies: ReadonlyArray<Movie>,
    withBackDropImage: boolean | undefined
  ): ReadonlyArray<MovieTransformed>;
}
