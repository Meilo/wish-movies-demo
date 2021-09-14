import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { Movies } from "view/api/fixtures";
import { moviesRepositoryMock } from "view/api/fixtures/repositories";
import GetMovieUseCase from "../GetMovieUseCase";

const moviesRepository = new MoviesRepository(moviesRepositoryMock);

describe("GetMovieUseCase", () => {
  const movie = new GetMovieUseCase(moviesRepository);

  it("Should return a movie", async () => {
    expect(await movie.execute(false, false, new MoviesPresenter(), 1)).toBe(
      Movies[0]
    );
  });

  it("Should return a transformed movie", async () => {
    expect(
      await movie.execute(true, false, new MoviesPresenter(), 1)
    ).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      overview: "bla",
    });
  });

  it("Should return backdrop image in the list of movies", async () => {
    expect(
      await movie.execute(true, true, new MoviesPresenter(), 1)
    ).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      overview: "bla",
    });
  });
});
