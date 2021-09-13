import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import GetMoviesUseCase from "../GetMoviesUseCase";
import { Movies } from "../../fixtures";

describe("GetMoviesUseCase", () => {
  const movies = new GetMoviesUseCase(Movies, new MoviesPresenter());

  it("Should return a list of movies", () => {
    expect(movies.execute()).toStrictEqual([
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

  it("Should return the first five films of the list", () => {
    expect(movies.execute(5).length).toBe(5);
    expect(movies.execute(5)).toStrictEqual([
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

  it("Should return backdrop image in the list of movies", () => {
    expect(movies.execute(1, true)).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
        overview: "bla",
      },
    ]);
  });
});
