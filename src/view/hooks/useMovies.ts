import React, { useState, useEffect } from "react";

import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesController } from "adapter/controllers";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import MoviesPresenter from "adapter/presenters/MoviesPresenter";
import { getDiscoverMovies, getMovieById } from "../api";

const moviesRepository = new MoviesRepository({
  getDiscoverMovies,
  getMovieById,
});
const moviesController = new MoviesController(
  {
    getMoviesUseCase: new GetMoviesUseCase(moviesRepository),
    getMovieUseCase: new GetMovieUseCase(moviesRepository),
  },
  new MoviesPresenter()
);

const useMovies = (movieId: number | undefined = undefined) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const showMovies = async () => {
    try {
      if (movieId) {
        setData(await moviesController.getMovie({ movieId }));
      } else {
        setData(await moviesController.getMovies(5));
      }
      setIsLoading(moviesController.isLoading);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    showMovies();
  }, []);

  return {
    data,
    isLoading,
    error,
    retry: showMovies,
  };
};

export default useMovies;
