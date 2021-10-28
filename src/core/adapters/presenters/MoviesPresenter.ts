import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import Presenter from "./Presenter";

interface MoviesPresenterInterface {
  displayMoviesLoading(): void;
  displayMovies(movies: MovieTransformed[]): void;
}

export class MoviesPresenterVM {
  loading = true;
  movies?: MovieTransformed[] | MovieIntegraleTransformed[];
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
    movies: MovieTransformed[] | MovieIntegraleTransformed[]
  ): void {
    this.vm.movies = movies;
    this.vm.loading = false;
  }
}
