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

const useMoviesController = () => {
  return {
    controller: moviesController,
    vm: moviesPresenter.vm,
  };
};

export default useMoviesController;
