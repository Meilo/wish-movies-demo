import { Movie } from "./movie";

export type Wishlist = {
  id: number;
  name: string;
  items: Movie[];
};
