import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import { MovieTransformed } from "../../models";

export interface GetMoviesUseCaseMethods {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter
  ): Promise<ReadonlyArray<MovieTransformed>>;
}
