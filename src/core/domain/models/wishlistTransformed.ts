import { MovieTransformed } from "./movieTransformed";

export interface WishlistTransformed {
  id: number;
  name: string;
  movies: ReadonlyArray<MovieTransformed>;
}
