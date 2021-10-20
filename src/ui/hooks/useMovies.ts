import React, { useState, useEffect } from "react";
import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import moviesControllerHandler from "ui/services/moviesControllerHandler";

interface useMoviesType {
  movieId?: number;
  limit?: number;
  toTransformed?: boolean;
}

const useMovies = ({ movieId, limit = 5, toTransformed }: useMoviesType) => {
  const vm = moviesControllerHandler.vm;
  const controller = moviesControllerHandler.controller;
  const [movies, setMovies] = useState<
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>
    | []
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      await controller.fetchMovies({ limit, movieId, toTransformed });
      if (vm.movies) {
        setMovies(vm.movies);
        setIsLoading(vm.loading);
      }
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
