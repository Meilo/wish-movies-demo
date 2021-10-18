import { Movie } from ".";

export interface Wishlist {
  id: number;
  name: string;
  items: ReadonlyArray<Movie>;
}
