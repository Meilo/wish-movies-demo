import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import { MoviesRepositories } from "core/domain/models/repositories/moviesRepositories";

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
