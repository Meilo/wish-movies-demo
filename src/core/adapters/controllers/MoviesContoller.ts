import { GetMoviesUseCase, GetMovieUseCase } from "core/domain/usecases";
import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import { MoviesProps } from "core/adapters/types";
import Controller from "./Controller";

export default class MoviesController implements Controller {
  constructor(
    private usecases: {
      getMoviesUseCase: GetMoviesUseCase;
      getMovieUseCase: GetMovieUseCase;
    },
    private moviesPresenter: MoviesPresenter
  ) {}

  async retreive({
    limit,
    toTransformed = true,
    withBackDropImage = false,
    movieId = undefined,
  }: MoviesProps) {
    if (movieId) {
      await this.usecases.getMovieUseCase.execute(
        toTransformed,
        withBackDropImage,
        this.moviesPresenter,
        movieId
      );
    } else {
      await this.usecases.getMoviesUseCase.execute(
        limit,
        false,
        this.moviesPresenter
      );
    }
  }
}
