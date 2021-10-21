import { MovieTransformed } from "./movieTransformed";

export type WishlistTransformed = {
  id: number;
  name: string;
  movies: ReadonlyArray<MovieTransformed>;
};
