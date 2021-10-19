import React from "react";
import { render } from "@testing-library/react-native";
import MovieDetails from "../components/movies/movieDetails";
import useMovies from "ui/hooks/useMovies";
import { MovieIntegraleTransformed } from "../api/fixtures";

jest.mock("ui/hooks/useMovies");

const MoviesProps = {
  isLoading: false,
  error: null,
  data: undefined,
};

describe("MovieDetails", () => {
  it("Should return loading", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: true,
    });
    const { getByText } = render(
      <MovieDetails route={{ params: { id: 1, title: "Naruto" } }} />
    );
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("Should display error", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: [],
      error: "Error",
    });
    const { getByText } = render(
      <MovieDetails route={{ params: { id: 1, title: "Naruto" } }} />
    );
    expect(getByText("An error detected")).toBeTruthy();
  });

  it("Should display nothing", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: [],
    });
    const { getByTestId } = render(
      <MovieDetails route={{ params: { id: 1, title: "Naruto" } }} />
    );
    expect(getByTestId("NoMovie")).toBeTruthy();
  });

  it("Should display data", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: [MovieIntegraleTransformed],
    });
    const { getByTestId } = render(
      <MovieDetails route={{ params: { id: 1, title: "Naruto" } }} />
    );
    expect(getByTestId("Naruto")).toBeTruthy();
  });
});
