import { Movie } from "../movie";

export interface MoviesRepositories {
  getItemStatusInWishlist(movieId: number): Promise<boolean>;
  getDiscoverMovies(): Promise<Movie[]>;
  getMovieById(movieId: number): Promise<Movie>;
}
