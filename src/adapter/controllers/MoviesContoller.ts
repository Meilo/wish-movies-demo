import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesMethods } from "./methods";
import MoviesPresenter from "../presenters/MoviesPresenter";
import MoviesRepository from "../repositories/MoviesRepository";

export default class Movies extends MoviesPresenter implements MoviesMethods {
  constructor(private request: Function) {
    super();
  }

  async getMovies(limit: number | undefined = undefined) {
    const moviesRepository = new MoviesRepository(this.request);
    const usecase = new GetMoviesUseCase(moviesRepository);
    return await usecase.execute(limit, false, new MoviesPresenter());
  }

  async getMovie(
    toTransformed: boolean | undefined = true,
    withBackDropImage: boolean | undefined = false,
    movieId: number
  ) {
    const movieRepository = new MoviesRepository(this.request);
    const usecase = new GetMovieUseCase(movieRepository);
    return await usecase.execute(
      toTransformed,
      withBackDropImage,
      new MoviesPresenter(),
      movieId
    );
  }
}
