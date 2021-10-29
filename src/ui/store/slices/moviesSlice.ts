import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import moviesControllerHandler from "ui/services/handleControllers/moviesControllerHandler";

const movies = moviesControllerHandler.controller;
const vm = moviesControllerHandler.vm;

type Props = {
  movieId?: number;
  limit?: number;
  toTransformed?: boolean;
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ limit }: Props) => {
    await movies.retreive({ limit });
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: vm.movies as
      | MovieTransformed[]
      | MovieIntegraleTransformed[]
      | undefined,
    loading: vm.loading,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = vm.loading;
    });
    builder.addCase(fetchMovies.fulfilled, (state) => {
      state.movies = vm.movies;
      state.loading = vm.loading;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.error = true;
    });
  },
});

export default moviesSlice.reducer;
