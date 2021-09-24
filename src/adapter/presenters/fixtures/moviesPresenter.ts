import { MovieIntegraleTransformed, MovieTransformed } from "domain/models";

export const vm: {
  loading: boolean;
  movies: ReadonlyArray<MovieTransformed> | undefined;
} = { loading: false, movies: undefined };

export const moviesPresenter = {
  displayMoviesLoading() {
    vm.loading = true;
  },
  displayMovies(
    movies:
      | ReadonlyArray<MovieTransformed>
      | ReadonlyArray<MovieIntegraleTransformed>
  ) {
    vm.movies = movies;
    vm.loading = false;
  },
  vm,
};
