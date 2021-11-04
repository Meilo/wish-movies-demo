import {
  Controller,
  MoviesProps,
} from "core/domain/models/controllers/contoller";
import { MoviesPresentation } from "core/domain/models/presenters/moviesPresentation";
import { MoviesUseCase } from "core/domain/models/usecases/moviesUseCase";

export default class MoviesController implements Controller {
  constructor(
    private usecases: {
      getMoviesUseCase: MoviesUseCase;
      getMovieUseCase: MoviesUseCase;
    },
    private moviesPresenter: MoviesPresentation
  ) {}

  async retreive({
    limit,
    toTransformed = true,
    withBackDropImage = false,
    movieId = undefined,
  }: MoviesProps) {
    if (movieId) {
      await this.usecases.getMovieUseCase.execute({
        toTransformed,
        withBackDropImage,
        presenter: this.moviesPresenter,
        movieId,
      });
    } else {
      await this.usecases.getMoviesUseCase.execute({
        limit,
        withBackDropImage: false,
        presenter: this.moviesPresenter,
      });
    }
  }
}
