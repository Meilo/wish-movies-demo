import { Movies } from "view/api/fixtures";
import { Movie } from "domain/models";

const getDiscoverMovies = (): Promise<ReadonlyArray<Movie>> => {
  return Promise.resolve(Movies);
};

export default getDiscoverMovies;
