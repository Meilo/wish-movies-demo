export type MoviesProps = {
  limit?: number;
  toTransformed?: boolean;
  withBackDropImage?: boolean;
  movieId?: number | undefined;
};

export interface Controller {
  retreive(props?: MoviesProps): void;
}

export interface WishlistController {
  add(movieId: number): Promise<void>;
  remove(movieId: number): Promise<void>;
}
