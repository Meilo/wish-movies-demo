import { Movie } from "domain/models";
import { Movies } from "view/api/fixtures";

const getMovieById = (movieId: number): Promise<Movie> => {
  const movie = Movies.find((movie) => movie.id === movieId);
  /* @ts-ignore */
  return Promise.resolve(movie);
};
export default getMovieById;
