import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { Movie, MovieTransformed } from "domain/models";
import { GetMovieUseCaseMethods } from "./methodes";

export default class GetMovieUseCase implements GetMovieUseCaseMethods {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(
    toTransformed: boolean | undefined = true,
    withBackDropImage: boolean | undefined = false,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<Movie | MovieTransformed> {
    presenter.isLoadingHandler(true);
    const movie = await this.movieRepository.getMovieById(movieId);
    return toTransformed
      ? presenter.show([movie], withBackDropImage)[0]
      : movie;
  }
}
