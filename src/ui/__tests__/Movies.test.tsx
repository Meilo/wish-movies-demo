import React from "react";
import { render } from "@testing-library/react-native";
import Movies from "../components/movies";
import useMovies from "ui/hooks/useMovies";
import { MoviesTransformed } from "../api/fixtures";

jest.mock("ui/hooks/useMovies");

const MoviesProps = {
  isLoading: false,
  error: null,
  data: undefined,
};

describe("Movies", () => {
  it("Should display loading if isLoading", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: true,
    });
    const { getByText } = render(<Movies />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("Should display loading if data is undefined", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
    });
    const { getByText } = render(<Movies />);
    expect(getByText("Movies not found")).toBeTruthy();
  });

  it("Should display error", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: [],
      error: "Error",
    });
    const { getByText } = render(<Movies />);
    expect(getByText("An error detected")).toBeTruthy();
  });

  it("Should display data", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: MoviesTransformed,
    });
    const { getByTestId } = render(<Movies />);
    expect(getByTestId("movies")).toBeTruthy();
  });
});
