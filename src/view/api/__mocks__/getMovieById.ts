import { Movie } from "domain/models";
import { Movies } from "domain/fixtures";

const getMovieById = (movieId: number): Promise<Movie | undefined> => {
  const movie = Movies.find((movie) => movie.id === movieId);
  return Promise.resolve(movie);
};
export default getMovieById;
