import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import { MoviesPresentation } from "core/domain/models/presenters/moviesPresentation";
import Presenter from "./Presenter";

export class MoviesPresenterVM {
  loading = true;
  movies?: MovieTransformed[] | MovieIntegraleTransformed[];
}

export default class MoviesPresenter
  extends Presenter<MoviesPresenterVM>
  implements MoviesPresentation
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
