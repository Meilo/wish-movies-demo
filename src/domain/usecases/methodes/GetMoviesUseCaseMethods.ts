import { MoviesPresenter } from "adapter/presenters/MoviesPresenter";

export interface GetMoviesUseCaseMethods {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter
  ): Promise<void>;
}
