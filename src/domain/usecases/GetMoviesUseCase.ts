import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { MovieTransformed } from "../models";
import { GetMoviesUseCaseMethods } from "./methodes";

export default class GetMoviesUseCase implements GetMoviesUseCaseMethods {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(
    limit: number | undefined = undefined,
    withBackDropImage: boolean | undefined = false,
    presenter: MoviesPresenter
  ): Promise<ReadonlyArray<MovieTransformed>> {
    presenter.isLoadingHandler(true);
    const movies = await this.moviesRepository.getDiscoverMovies();
    const nbItems: number = limit || movies.length;
    return presenter.show(movies.slice(0, nbItems), withBackDropImage);
  }
}
