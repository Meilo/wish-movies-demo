import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import { Movie, MovieTransformed } from "../models";
import { GetMoviesUseCaseMethods } from "./methodes";

export default class GetMoviesUseCase implements GetMoviesUseCaseMethods {
  constructor(
    private repository: ReadonlyArray<Movie>,
    private presenter: MoviesPresenter
  ) {}

  execute(
    limit: number | undefined = undefined,
    withBackDropImage: boolean | undefined = false
  ): ReadonlyArray<MovieTransformed> {
    const nbItems: number = limit || this.repository.length;
    const movies: ReadonlyArray<Movie> = this.repository.slice(0, nbItems);
    return this.presenter.show(movies, withBackDropImage);
  }
}
