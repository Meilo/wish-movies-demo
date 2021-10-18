import { Movies } from "config/src/ui/api/fixtures";
import { Movie } from "core/domain/models";

const getDiscoverMovies = (): Promise<ReadonlyArray<Movie>> => {
  return Promise.resolve(Movies);
};

export default getDiscoverMovies;
