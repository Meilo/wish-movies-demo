import React, { useState, useEffect } from "react";
import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";
import moviesControllerHandler from "ui/services/handleControllers/moviesControllerHandler";

type Props = {
  movieId?: number;
  limit?: number;
  toTransformed?: boolean;
};

const useMovies = ({ movieId, limit = 5, toTransformed }: Props) => {
  const vm = moviesControllerHandler.vm;
  const moviesController = moviesControllerHandler.controller;
  const [movies, setMovies] = useState<
    MovieTransformed[] | MovieIntegraleTransformed[] | []
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      await moviesController.retreive({ limit, movieId, toTransformed });
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
