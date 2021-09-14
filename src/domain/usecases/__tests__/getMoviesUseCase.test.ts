import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import getDiscoverMovies from "view/api/__mocks__/getDiscoverMovies";
import getMovieById from "view/api/__mocks__/getMovieById";
import GetMoviesUseCase from "../GetMoviesUseCase";

const moviesRepository = new MoviesRepository({
  getDiscoverMovies,
  getMovieById,
});

describe("GetMoviesUseCase", () => {
  const movies = new GetMoviesUseCase(moviesRepository);

  it("Should return a list of movies", async () => {
    expect(
      await movies.execute(undefined, undefined, new MoviesPresenter())
    ).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 2,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 3,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 4,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 5,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 6,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
    ]);
  });

  it("Should return the first five films of the list", async () => {
    const result = await movies.execute(5, undefined, new MoviesPresenter());
    expect(result.length).toBe(5);
    expect(result).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 2,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 3,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 4,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
      {
        id: 5,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        overview: "bla",
      },
    ]);
  });

  it("Should return backdrop image in the list of movies", async () => {
    expect(await movies.execute(1, true, new MoviesPresenter())).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
        overview: "bla",
      },
    ]);
  });
});
