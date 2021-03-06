import { moviesRepository as repository } from "ui/api/repositories";
import { MoviesTransformed as Movies } from "ui/api/fixtures";
import { MoviesBuilder } from "./builders/MoviesBuilder";
import GetMoviesUseCase from "../GetMoviesUseCase";

jest.mock("ui/api/repositories");

const Presenter = MoviesBuilder.presenter;

describe("GetMoviesUseCase", () => {
  it("Should loading when haven't movies", async () => {
    const moviesRepository = MoviesBuilder.repositories({
      ...repository,
      getDiscoverMovies: () => Promise.resolve([]),
    });
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute({ presenter: Presenter });
    expect(Presenter.vm.loading).toBeTruthy();
  });
  it("Should display all movies if hasn't limit", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute({ presenter: Presenter });
    expect(Presenter.vm.loading).toBeFalsy();
    expect(Presenter.vm.movies?.length).toBe(6);
    expect(Presenter.vm.movies).toStrictEqual(Movies);
  });
  it("Should display movies based on limit", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute({ limit: 1, presenter: Presenter });
    expect(Presenter.vm.loading).toBeFalsy();
    expect(Presenter.vm.movies?.length).toBe(1);
    expect(Presenter.vm.movies).toStrictEqual([Movies[0]]);
  });
  it("Should display movies with withBackDropImage", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMoviesUseCase(moviesRepository);
    await usecase.execute({
      limit: 1,
      presenter: Presenter,
      withBackDropImage: true,
    });
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
