import React, { useState, useEffect } from "react";
import { MoviesController } from "core/adapters/controllers";
import { MoviesPresenterVM } from "core/adapters/presenters/MoviesPresenter";
import {
  MovieIntegraleTransformed,
  MovieTransformed,
} from "core/domain/models";

const useMovies = ({
  movieId,
  vm,
  controller,
}: {
  movieId?: number;
  vm: MoviesPresenterVM;
  controller: MoviesController;
}) => {
  const [movies, setMovies] = useState<
    | ReadonlyArray<MovieTransformed>
    | ReadonlyArray<MovieIntegraleTransformed>
    | undefined
  >(vm.movies);
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const [error, setError] = useState<any>(null);

  const getMovies = () => {
    controller
      .fetchMovies({ limit: 5, movieId })
      .then(() => {
        setMovies(vm.movies);
        setIsLoading(vm.loading);
      })
      .catch((err: any) => {
        setError(err);
      });
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
