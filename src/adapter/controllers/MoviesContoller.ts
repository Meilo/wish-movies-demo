import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesMethods } from "./methods";
import MoviesPresenter from "../presenters/MoviesPresenter";

export default class MoviesController
  extends MoviesPresenter
  implements MoviesMethods
{
  constructor(
    private usecases: {
      getMoviesUseCase: GetMoviesUseCase;
      getMovieUseCase: GetMovieUseCase;
    },
    private moviesPresenter: MoviesPresenter
  ) {
    super();
  }

  async getMovies(limit: number | undefined = undefined) {
    return await this.usecases.getMoviesUseCase.execute(
      limit,
      false,
      this.moviesPresenter
    );
  }

  async getMovie({
    toTransformed = true,
    withBackDropImage = false,
    movieId,
  }: {
    toTransformed?: boolean;
    withBackDropImage?: boolean;
    movieId: number;
  }) {
    return await this.usecases.getMovieUseCase.execute(
      toTransformed,
      withBackDropImage,
      this.moviesPresenter,
      movieId
    );
  }
}
