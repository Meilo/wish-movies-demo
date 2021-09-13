import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import GetMovieUseCase from "../GetMovieUseCase";
import { Movies } from "../../fixtures";

describe("GetMovieUseCase", () => {
  const movie = new GetMovieUseCase(Movies[0], new MoviesPresenter());

  it("Should return a movie", () => {
    expect(movie.execute(false)).toBe(Movies[0]);
  });

  it("Should return a transformed movie", () => {
    expect(movie.execute()).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      overview: "bla",
    });
  });

  it("Should return backdrop image in the list of movies", () => {
    expect(movie.execute(true, true)).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      overview: "bla",
    });
  });
});
