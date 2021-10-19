import AppConfig from "config/app.json";
import { Movie } from "core/domain/models/movie";
import Http from "../utils/http";

const getMovieById = async (movieId: number): Promise<Movie> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/movie/${movieId}?api_key=${AppConfig.exoArchi.apiKey}`;
  const res = await http.get(apiUrl);
  return res.data;
};

export default getMovieById;
