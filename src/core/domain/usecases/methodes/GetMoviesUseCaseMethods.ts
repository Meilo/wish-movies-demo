import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";

export interface GetMoviesUseCaseMethods {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter
  ): Promise<void>;
}
