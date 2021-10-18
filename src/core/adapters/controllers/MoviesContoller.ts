import { GetMoviesUseCase, GetMovieUseCase } from "core/domain/usecases";
import MoviesPresenter from "../presenters/MoviesPresenter";

interface MoviesContollerType {
  fetchMovies({
    limit,
    toTransformed,
    withBackDropImage,
    movieId,
  }: {
    limit: number | undefined;
    toTransformed?: boolean;
    withBackDropImage?: boolean;
    movieId: number;
  }): void;
}

interface FetchMoviesType {
  limit?: number;
  toTransformed?: boolean;
  withBackDropImage?: boolean;
  movieId: number | undefined;
}

export default class MoviesController implements MoviesContollerType {
  constructor(
    private usecases: {
      getMoviesUseCase: GetMoviesUseCase;
      getMovieUseCase: GetMovieUseCase;
    },
    private moviesPresenter: MoviesPresenter
  ) {}

  async fetchMovies({
    limit,
    toTransformed = true,
    withBackDropImage = false,
    movieId = undefined,
  }: FetchMoviesType) {
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
