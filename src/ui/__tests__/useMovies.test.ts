import { renderHook, act } from "@testing-library/react-hooks";
import useMovies from "../hooks/useMovies";

jest.mock("ui/api/repositories");

describe("useMovies", () => {
  it("Should return one movie", async () => {
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
