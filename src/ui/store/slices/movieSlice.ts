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

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async ({ toTransformed, movieId }: Props) => {
    await movies.retreive({ toTransformed, movieId });
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: undefined as
      | MovieTransformed
      | MovieIntegraleTransformed
      | undefined,
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state) => {
      if (vm.movies && vm.movies.length > 0) {
        state.movie = vm.movies[0];
        state.loading = false;
      }
    });
    builder.addCase(fetchMovie.rejected, (state) => {
      state.error = true;
    });
  },
});

export default movieSlice.reducer;
