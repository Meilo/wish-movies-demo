import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesMethods } from "./methods";
import MoviesPresenter from "../presenters/MoviesPresenter";

export default class Movies implements MoviesMethods {
  public isLoading: boolean = true;

  constructor(private request: Function) {}

  private isLoadingHandler(status: boolean) {
    this.isLoading = status;
  }

  async getMovies(limit: number | undefined = undefined) {
    this.isLoadingHandler(true);
    const movies = await this.request();
    const usecase = new GetMoviesUseCase(movies, new MoviesPresenter());
    this.isLoadingHandler(false);
    return usecase.execute(limit);
  }

  async getMovie(
    toTransformed: boolean | undefined = true,
    withBackDropImage: boolean | undefined = false
  ) {
    this.isLoadingHandler(true);
    const movie = await this.request();
    const usecase = new GetMovieUseCase(movie, new MoviesPresenter());
    this.isLoadingHandler(false);
    return usecase.execute(toTransformed, withBackDropImage);
  }
}
