import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import { MoviesPresenterMethods } from "./methods/moviesPresenterMethods";
import Presenter from "./Presenter";

export class MoviesPresenterVM {
  loading = false;
  movies?:
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>;
}

export default class MoviesPresenter
  extends Presenter<MoviesPresenterVM>
  implements MoviesPresenterMethods
{
  constructor() {
    super(new MoviesPresenterVM());
  }

  displayMoviesLoading(): void {
    this.vm.loading = true;
  }

  displayMovies(
    movies:
      | ReadonlyArray<MovieTransformed>
      | ReadonlyArray<MovieIntegraleTransformed>
  ): void {
    this.vm.movies = movies;
    this.vm.loading = false;
  }
}
