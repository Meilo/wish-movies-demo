import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import Presenter from "./Presenter";

interface MoviesPresenterInterface {
  displayMoviesLoading(): void;
  displayMovies(movies: ReadonlyArray<MovieTransformed>): void;
}

export class MoviesPresenterVM {
  loading = true;
  movies?:
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>;
}

export default class MoviesPresenter
  extends Presenter<MoviesPresenterVM>
  implements MoviesPresenterInterface
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
