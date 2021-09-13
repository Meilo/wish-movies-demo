import { Movies as MoviesData } from "domain/fixtures";
import getDiscoverMovies from "view/api/__mocks__/getDiscoverMovies";
import getMovieById from "view/api/__mocks__/getMovieById";
import { Movies } from "..";

describe("Movies", () => {
  it("Should return the movies list", async () => {
    const movies = new Movies(() => getDiscoverMovies());
    const moviesList = await movies.getMovies();
    expect(moviesList.length).toBe(6);
  });

  it("Should return the movies list transformed", async () => {
    const movies = new Movies(() => getDiscoverMovies());
    const moviesList = await movies.getMovies();
    expect(moviesList).toStrictEqual([
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

  it("Should return first five of the movies list", async () => {
    const movies = new Movies(() => getDiscoverMovies());
    const moviesList = await movies.getMovies(5);
    expect(moviesList.length).toBe(5);
  });

  it("Should return first five of movies list transformed", async () => {
    const movies = new Movies(() => getDiscoverMovies());
    const moviesList = await movies.getMovies(5);
    expect(moviesList).toStrictEqual([
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
});

describe("Movie", () => {
  const movie = new Movies((movieId: number) => getMovieById(movieId));

  it("Should return a movie", async () => {
    const result = await movie.getMovie(false, false, 1);
    expect(result).toStrictEqual(MoviesData[0]);
  });

  it("Should return a transformed movie", async () => {
    const result = await movie.getMovie(true, false, 1);
    expect(result).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
      overview: "bla",
    });
  });

  it("Should return a transformed movie with backdrop image", async () => {
    const result = await movie.getMovie(true, true, 1);
    expect(result).toStrictEqual({
      id: 1,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
      overview: "bla",
    });
  });
});
