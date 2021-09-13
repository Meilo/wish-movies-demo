import { Movie } from "../models";

export interface Wishlist {
  id: number;
  name: string;
  items: ReadonlyArray<Movie>;
}
