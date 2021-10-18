import { MovieTransformed } from "core/domain/models";

export interface MoviesPresenterMethods {
  displayMoviesLoading(): void;
  displayMovies(movies: ReadonlyArray<MovieTransformed>): void;
}
