import MoviesRepository from "adapter/repositories/MoviesRepository";
import { moviesRepository as repository } from "view/api/repositories";
import {
  MovieIntegraleTransformed as MovieAllInfoTransformed,
  MoviesTransformed,
} from "view/api/fixtures";
import {
  moviesPresenter,
  vm,
} from "adapter/presenters/fixtures/moviesPresenter";
import GetMovieUseCase from "../GetMovieUseCase";

jest.mock("view/api/repositories");

const Presenter = moviesPresenter;

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
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie if to transfomed is undefined", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [MovieAllInfoTransformed];
        vm.loading = false;
      },
    };
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(undefined, true, presenter, 1);
    expect(presenter.vm.movies).toStrictEqual([MovieAllInfoTransformed]);
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with backdrop path image", async () => {
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
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with poster path image", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [MoviesTransformed[0]];
        vm.loading = false;
      },
    };
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(true, undefined, presenter, 1);
    expect(presenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
