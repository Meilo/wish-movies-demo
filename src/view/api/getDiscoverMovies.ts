import AppConfig from "config/app.json";
import { Movie } from "domain/models/movie";
import Http from "view/utils/http";

const getDiscoverMovies = (): Promise<ReadonlyArray<Movie>> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/discover/movie/?api_key=${AppConfig.exoArchi.apiKey}`;
  return http.get(apiUrl).then((res) => res.data.results);
};

export default getDiscoverMovies;
