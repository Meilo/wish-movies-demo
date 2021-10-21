import MoviesRepository from "core/adapters/repositories/MoviesRepository";
import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import { moviesRepository as repository } from "ui/api/repositories";
import { GetMoviesUseCase, GetMovieUseCase } from "core/domain/usecases";
import { MoviesTransformed } from "ui/api/fixtures";
import { MoviesController } from "../controllers";

jest.mock("ui/api/repositories");

const moviesRepository = new MoviesRepository(repository);
const moviesPresenter = new MoviesPresenter();
const controller = new MoviesController(
  {
    getMoviesUseCase: new GetMoviesUseCase(moviesRepository),
    getMovieUseCase: new GetMovieUseCase(moviesRepository),
  },
  moviesPresenter
);

describe("MoviesContoller", () => {
  it("Should fetch one movie selected by movieId", async () => {
    await controller.retreive({ limit: 5, movieId: 1 });
    expect(moviesPresenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
  });
  it("Should fetch one movie based on limit", async () => {
    await controller.retreive({ limit: 1, movieId: undefined });
    expect(moviesPresenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
  });
  it("Should fetch all movies", async () => {
    await controller.retreive({ movieId: undefined });
    expect(moviesPresenter.vm.movies?.length).toStrictEqual(6);
  });
  it("Should fetch a movie by id with withBackDropImage", async () => {
    await controller.retreive({
      movieId: 1,
      withBackDropImage: true,
    });
    expect(moviesPresenter.vm.movies).toStrictEqual([
      {
        ...MoviesTransformed[0],
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      },
    ]);
  });
  it("Should fetch one movie based on limit with withBackDropImage", async () => {
    await controller.retreive({
      limit: 1,
      movieId: undefined,
      withBackDropImage: true,
    });
    expect(moviesPresenter.vm.movies).toStrictEqual([
      {
        ...MoviesTransformed[0],
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      },
    ]);
  });
});
