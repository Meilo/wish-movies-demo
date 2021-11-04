import { Movie } from "./movie";

export type MovieIntegraleTransformed = Movie & {
  poster: string;
  isInWishlist: boolean;
};
