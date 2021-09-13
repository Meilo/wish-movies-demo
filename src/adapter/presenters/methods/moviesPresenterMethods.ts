import { MovieTransformed, Movie } from "domain/models";

export interface MoviesPresenterMethods {
  show(
    untransformedMovies: ReadonlyArray<Movie>,
    withBackDropImage: boolean | undefined
  ): ReadonlyArray<MovieTransformed>;
}
