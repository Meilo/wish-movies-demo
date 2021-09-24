import MoviesRepository from "adapter/repositories/MoviesRepository";
import { moviesPresenter } from "adapter/presenters/fixtures/moviesPresenter";
import { moviesRepository as repository } from "view/api/repositories";
import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesTransformed } from "view/api/fixtures";
import { MoviesController } from "..";

jest.mock("view/api/repositories");

const moviesRepository = new MoviesRepository(repository);
const controller = new MoviesController(
  {
    getMoviesUseCase: new GetMoviesUseCase(moviesRepository),
    getMovieUseCase: new GetMovieUseCase(moviesRepository),
  },
  moviesPresenter
);

describe("MoviesContoller", () => {
  it("Should fetch one movie selected by movieId", async () => {
    await controller.fetchMovies({ limit: 5, movieId: 1 });
    expect(moviesPresenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
  });
  it("Should fetch one movie based on limit", async () => {
    await controller.fetchMovies({ limit: 1, movieId: undefined });
    expect(moviesPresenter.vm.movies).toStrictEqual([MoviesTransformed[0]]);
  });
  it("Should fetch all movies", async () => {
    await controller.fetchMovies({ movieId: undefined });
    expect(moviesPresenter.vm.movies?.length).toStrictEqual(6);
  });
  it("Should fetch a movie by id with withBackDropImage", async () => {
    await controller.fetchMovies({
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
    await controller.fetchMovies({
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
