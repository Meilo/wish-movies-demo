import { GetMoviesUseCase, GetMovieUseCase } from "core/domain/usecases";
import { MoviesMethods } from "./methods";
import MoviesPresenter from "../presenters/MoviesPresenter";

interface FetchMoviesType {
  limit?: number;
  toTransformed?: boolean;
  withBackDropImage?: boolean;
  movieId: number | undefined;
}

export default class MoviesController implements MoviesMethods {
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