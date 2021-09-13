import { Movie, MovieTransformed } from "domain/models";
import { MoviesPresenterMethods } from "./methods/moviesPresenterMethods";
import Presenter from ".";

export default class MoviesPresenter
  extends Presenter
  implements MoviesPresenterMethods
{
  public isLoading: boolean = false;

  public isLoadingHandler(status: boolean) {
    this.isLoading = status;
  }

  private imagePath(path: string) {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
  }

  show(
    untransformedMovies: ReadonlyArray<Movie>,
    withBackDropImage: boolean | undefined = false
  ): ReadonlyArray<MovieTransformed> {
    this.isLoadingHandler(false);
    return untransformedMovies.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      poster: withBackDropImage
        ? this.imagePath(movie.backdrop_path)
        : this.imagePath(movie.poster_path),
      overview: movie.overview,
    }));
  }
}
