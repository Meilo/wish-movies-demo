import { MovieTransformed } from "../../models";
import { Movie } from "../../models/movie";

export interface GetMovieUseCaseMethods {
  execute(
    toTransformed: boolean | undefined,
    withBackDropImage: boolean | undefined
  ): Movie | MovieTransformed;
}
