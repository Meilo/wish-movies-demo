import { MoviesRepositories } from "core/adapters/types";
import { MovieIntegraleTransformed, MovieTransformed } from "../models";

let vm: {
  movies: MovieTransformed[] | MovieIntegraleTransformed[];
  loading: boolean;
} = {
  movies: [],
  loading: true,
};
export const MoviesBuilder = {
  presenter: {
    vm,
    displayMovies: (
      movies: MovieTransformed[] | MovieIntegraleTransformed[]
    ) => {
      vm.movies = movies;
      vm.loading = false;
    },
    displayMoviesLoading(): void {
      vm.loading = true;
    },
  },
  repositories: (repositories: MoviesRepositories) => {
    return {
      getItemStatusInWishlist: (movieId: number) => {
        return repositories.getItemStatusInWishlist(movieId);
      },
      getDiscoverMovies: () => {
        return repositories.getDiscoverMovies();
      },
      getMovieById: (movieId: number) => {
        return repositories.getMovieById(movieId);
      },
    };
  },
};
