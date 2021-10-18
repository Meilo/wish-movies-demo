import AppConfig from "config/app.json";
import { Movie } from "core/domain/models/movie";
import Http from "../utils/http";

const getMovieById = (movieId: number): Promise<Movie> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/movie/${movieId}?api_key=${AppConfig.exoArchi.apiKey}`;
  return http.get(apiUrl).then((res) => res.data);
};

export default getMovieById;
