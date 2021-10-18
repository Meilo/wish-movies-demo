import MoviesRepository from "core/adapters/repositories/MoviesRepository";
import { moviesRepository as repository } from "ui/api/repositories";
import {
  MovieIntegraleTransformed as MovieAllInfoTransformed,
  MoviesTransformed,
} from "ui/api/fixtures";
import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import GetMovieUseCase from "../usecases/GetMovieUseCase";

jest.mock("ui/api/repositories");

const Presenter = new MoviesPresenter();

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
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(false, true, Presenter, 1);
    expect(Presenter.vm.movies).toStrictEqual([MovieAllInfoTransformed]);
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with backdrop path image", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(true, true, Presenter, 1);
    expect(Presenter.vm.movies).toStrictEqual([
      {
        ...MoviesTransformed[0],
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      },
    ]);
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with poster path image", async () => {
    const moviesRepository = new MoviesRepository(repository);
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute(true, false, Presenter, 1);
    expect(Presenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
