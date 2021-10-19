import React, { useState, useEffect } from "react";
import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import { GetMoviesUseCase, GetMovieUseCase } from "core/domain/usecases";
import { MoviesController } from "core/adapters/controllers";
import MoviesRepository from "core/adapters/repositories/MoviesRepository";
import MoviesPresenter from "core/adapters/presenters/MoviesPresenter";
import { moviesRepository as repository } from "../api/repositories";

const moviesRepository = new MoviesRepository(repository);
const moviesPresenter = new MoviesPresenter();
const moviesController = new MoviesController(
  {
    getMoviesUseCase: new GetMoviesUseCase(moviesRepository),
    getMovieUseCase: new GetMovieUseCase(moviesRepository),
  },
  moviesPresenter
);

interface useMoviesType {
  movieId?: number;
  limit?: number;
}

const useMovies = ({ movieId, limit = 5 }: useMoviesType) => {
  const vm = moviesPresenter.vm;
  const controller = moviesController;
  const [movies, setMovies] = useState<
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>
    | undefined
  >(vm.movies);
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      await controller.fetchMovies({ limit, movieId });
      setMovies(vm.movies);
      setIsLoading(vm.loading);
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    data: movies,
    isLoading,
    error,
    retry: getMovies,
  };
};

export default useMovies;
