import { renderHook, act } from "@testing-library/react-hooks";
import useMovies from "../hooks/useMovies";

jest.mock("ui/api/repositories");

describe("useMovies", () => {
  it("Should return one movie", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ movieId: 1, toTransformed: false })
    );
    act(() => {
      result.current.retry();
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual([
      {
        id: 1,
        title: "Naruto",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        original_language: "fr",
        poster_path: "Image de Naruto",
        adult: true,
        backdrop_path: "backdrop_path",
        genre_ids: [23],
        media_type: "media_type",
        original_title: "original_title",
        overview: "bla",
        popularity: 2.4,
        release_date: "release_date",
        video: false,
        vote_average: 3,
        vote_count: 3,
      },
    ]);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.retry).toBeCalled;
  });
  it("Should return one movie transformed", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ movieId: 1 })
    );
    act(() => {
      result.current.retry();
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual([
      {
        id: 1,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
    ]);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.retry).toBeCalled;
  });

  it("Should return all movies", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ limit: 6 })
    );
    act(() => {
      result.current.retry();
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual([
      {
        id: 1,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
      {
        id: 2,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
      {
        id: 3,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
      {
        id: 4,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
      {
        id: 5,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
      {
        id: 6,
        overview: "bla",
        poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
        title: "Naruto",
      },
    ]);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.retry).toBeCalled;
  });
});
