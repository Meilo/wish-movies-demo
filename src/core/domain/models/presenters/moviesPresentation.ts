import { MovieTransformed } from "../movieTransformed";

export interface MoviesPresentation {
  displayMoviesLoading(): void;
  displayMovies(movies: MovieTransformed[]): void;
}
