import { MovieTransformed } from "domain/models";

export interface MoviesPresenterMethods {
  displayMoviesLoading(): void;
  displayMovies(movies: ReadonlyArray<MovieTransformed>): void;
}
