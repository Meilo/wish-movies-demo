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
  const navigate = () => null;
  it("Should display loading if isLoading", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: true,
    });
    const { getByText } = render(<Movies navigation={{ navigate }} />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("Should display error", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: [],
      error: "Error",
    });
    const { getByText } = render(<Movies navigation={{ navigate }} />);
    expect(getByText("An error detected")).toBeTruthy();
  });

  it("Should display data", () => {
    (useMovies as jest.Mock).mockReturnValue({
      ...MoviesProps,
      isLoading: false,
      data: MoviesTransformed,
    });
    const { getByTestId } = render(<Movies navigation={{ navigate }} />);
    expect(getByTestId("movies")).toBeTruthy();
  });
});
