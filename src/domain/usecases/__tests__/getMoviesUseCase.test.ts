import MoviesRepository from "adapter/repositories/MoviesRepository";
import { moviesRepository as repository } from "view/api/repositories";
import { MoviesTransformed as Movies } from "view/api/fixtures";
import {
  moviesPresenter,
  vm,
} from "adapter/presenters/fixtures/moviesPresenter";
import GetMoviesUseCase from "../GetMoviesUseCase";

jest.mock("view/api/repositories");

const Presenter = moviesPresenter;

describe("GetMoviesUseCase", () => {
  it("Should loading when haven't movies", async () => {
    const moviesRepository = new MoviesRepository({
      ...repository,
      getDiscoverMovies: () => Promise.resolve([]),
    });
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(undefined, undefined, Presenter);
    expect(Presenter.vm.loading).toBeTruthy();
  });
  it("Should display all movies if hasn't limit", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = Movies;
        vm.loading = false;
      },
    };
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(undefined, undefined, presenter);
    expect(presenter.vm.loading).toBeFalsy();
    expect(presenter.vm.movies?.length).toBe(6);
    expect(presenter.vm.movies).toStrictEqual(Movies);
  });
  it("Should display movies based on limit", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [Movies[0]];
        vm.loading = false;
      },
    };
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(1, undefined, presenter);
    expect(presenter.vm.loading).toBeFalsy();
    expect(presenter.vm.movies?.length).toBe(1);
    expect(presenter.vm.movies).toStrictEqual([Movies[0]]);
  });
  it("Should display movies with withBackDropImage", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const presenter = {
      ...Presenter,
      displayMovies() {
        vm.movies = [Movies[0]];
        vm.loading = false;
      },
    };
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(1, true, presenter);
    expect(presenter.vm.loading).toBeFalsy();
    expect(presenter.vm.movies?.length).toBe(1);
    expect(presenter.vm.movies).toStrictEqual([Movies[0]]);
  });
});
