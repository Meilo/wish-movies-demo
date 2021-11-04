import { MoviesPresentation } from "../presenters/moviesPresentation";

export type ExecuteProps = {
  limit?: number | undefined;
  toTransformed?: boolean | undefined;
  withBackDropImage?: boolean | undefined;
  presenter: MoviesPresentation;
  movieId?: number;
};

export interface MoviesUseCase {
  execute(props: ExecuteProps): Promise<void>;
}
