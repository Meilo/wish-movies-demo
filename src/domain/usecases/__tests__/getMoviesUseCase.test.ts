import MoviesRepository from "adapter/repositories/MoviesRepository";
import { moviesRepository as repository } from "view/api/repositories";
import { MoviesTransformed as Movies } from "view/api/fixtures";
import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import GetMoviesUseCase from "../GetMoviesUseCase";

jest.mock("view/api/repositories");

const Presenter = new MoviesPresenter();

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
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(undefined, undefined, Presenter);
    expect(Presenter.vm.loading).toBeFalsy();
    expect(Presenter.vm.movies?.length).toBe(6);
    expect(Presenter.vm.movies).toStrictEqual(Movies);
  });
  it("Should display movies based on limit", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(1, undefined, Presenter);
    expect(Presenter.vm.loading).toBeFalsy();
    expect(Presenter.vm.movies?.length).toBe(1);
    expect(Presenter.vm.movies).toStrictEqual([Movies[0]]);
  });
  it("Should display movies with withBackDropImage", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute(1, true, Presenter);
    expect(Presenter.vm.loading).toBeFalsy();
    expect(Presenter.vm.movies?.length).toBe(1);
    expect(Presenter.vm.movies).toStrictEqual([
      {
        ...Movies[0],
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      },
    ]);
  });
});
