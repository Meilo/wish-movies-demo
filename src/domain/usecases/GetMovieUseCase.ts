import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import { GetMovieUseCaseMethods } from "./methodes";
import { Movie } from "../models";

export default class GetMovieUseCase implements GetMovieUseCaseMethods {
  constructor(private repository: Movie, private presenter: MoviesPresenter) {}

  execute(
    toTransformed: boolean | undefined = true,
    withBackDropImage: boolean | undefined = false
  ) {
    return toTransformed
      ? this.presenter.show([this.repository], withBackDropImage)[0]
      : this.repository;
  }
}
