import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import { MovieTransformed } from "../../models";
import { Movie } from "../../models/movie";

export interface GetMovieUseCaseMethods {
  execute(
    toTransformed: boolean | undefined,
    withBackDropImage: boolean | undefined,
    presenter: MoviesPresenter,
    movieId: number
  ): Promise<Movie | MovieTransformed>;
}
