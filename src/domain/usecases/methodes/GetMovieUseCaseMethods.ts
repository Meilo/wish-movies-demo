import { MoviesPresenter } from "adapter/presenters/MoviesPresenter";
export interface GetMovieUseCaseMethods {
  execute(
    toTransformed: boolean | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<void>;
}
