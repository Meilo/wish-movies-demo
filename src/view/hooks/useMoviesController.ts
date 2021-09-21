import { GetMoviesUseCase, GetMovieUseCase } from "domain/usecases";
import { MoviesController } from "adapter/controllers";
import MoviesRepository from "adapter/repositories/MoviesRepository";
import { MoviesPresenter } from "adapter/presenters/MoviesPresenter";
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

const useMoviesController = () => {
  return {
    controller: moviesController,
    vm: moviesPresenter.vm,
  };
};

export default useMoviesController;
