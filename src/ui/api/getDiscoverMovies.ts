import AppConfig from "config/app.json";
import { Movie } from "core/domain/models/movie";
import Http from "ui/services/http";

const getDiscoverMovies = async (): Promise<Movie[]> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/discover/movie/?api_key=${AppConfig.exoArchi.apiKey}`;
  const res = await http.get(apiUrl);
  return res.data.results;
};

export default getDiscoverMovies;
