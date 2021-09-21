import MoviesRepository from "adapter/repositories/MoviesRepository";
import { moviesRepository as repository } from "view/api/repositories";
import {
  MovieIntegraleTransformed as MovieAllInfoTransformed,
  MoviesTransformed,
} from "view/api/fixtures";
import { MovieIntegraleTransformed, MovieTransformed } from "domain/models";
import GetMovieUseCase from "../GetMovieUseCase";

jest.mock("view/api/repositories");

const vm: {
  loading: boolean;
  movies?:
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>;
} = { loading: false, movies: undefined };

const Presenter = {
  displayMoviesLoading() {
    vm.loading = true;
  },
  displayMovies() {
    vm.movies = undefined;
    vm.loading = false;
  },
  vm,
};

describe("GetMoviesUseCase", () => {
  it("Should loading when haven't movie", async () => {
    const moviesRepository = new MoviesRepository({
      ...repository,
      /* @ts-ignore */
      getMovieById: () => Promise.resolve(null),
    });
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(false, true, Presenter, 1);
    expect(Presenter.vm.loading).toBeTruthy();
  });
  it("Should return a movie", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [MovieAllInfoTransformed];
        vm.loading = false;
      },
    };
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(false, true, presenter, 1);
    expect(presenter.vm.movies).toStrictEqual([MovieAllInfoTransformed]);
  });
  it("Sould retun a movie transformed", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [MoviesTransformed[0]];
        vm.loading = false;
      },
    };
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(true, true, presenter, 1);
    expect(presenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
  });
});
