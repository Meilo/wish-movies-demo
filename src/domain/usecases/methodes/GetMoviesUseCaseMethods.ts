import { MovieTransformed } from "../../models";

export interface GetMoviesUseCaseMethods {
  execute(
    limit: number | undefined,
    withBackDropImage: boolean | undefined
  ): ReadonlyArray<MovieTransformed>;
}
