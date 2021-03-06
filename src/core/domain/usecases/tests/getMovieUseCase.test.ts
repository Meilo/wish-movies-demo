import { moviesRepository as repository } from "ui/api/repositories";
import {
  MovieIntegraleTransformed as MovieAllInfoTransformed,
  MoviesTransformed,
} from "ui/api/fixtures";
import { MoviesBuilder } from "./builders/MoviesBuilder";
import GetMovieUseCase from "../GetMovieUseCase";

jest.mock("ui/api/repositories");

const Presenter = MoviesBuilder.presenter;

describe("GetMoviesUseCase", () => {
  it("Should loading when haven't movie", async () => {
    const moviesRepository = MoviesBuilder.repositories({
      ...repository,
      /* @ts-ignore */
      getMovieById: () => Promise.resolve(null),
    });
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute({ presenter: Presenter, movieId: 1 });
    expect(Presenter.vm.loading).toBeTruthy();
  });
  it("Should return a movie", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute({ presenter: Presenter, movieId: 1 });
    expect(Presenter.vm.movies).toStrictEqual([MovieAllInfoTransformed]);
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with backdrop path image", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute({
      presenter: Presenter,
      movieId: 1,
      toTransformed: true,
    });
    expect(Presenter.vm.movies).toStrictEqual([
      {
        ...MoviesTransformed[0],
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      },
    ]);
    expect(Presenter.vm.loading).toBeFalsy();
  });

  it("Should return a movie transformed with poster path image", async () => {
    const moviesRepository = MoviesBuilder.repositories(repository);
    const usecase = new GetMovieUseCase(moviesRepository);
    await usecase.execute({
      presenter: Presenter,
      movieId: 1,
      toTransformed: true,
      withBackDropImage: false,
    });
    expect(Presenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
    expect(Presenter.vm.loading).toBeFalsy();
  });
});
