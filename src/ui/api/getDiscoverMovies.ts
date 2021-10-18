import AppConfig from "config/app.json";
import { Movie } from "core/domain/models/movie";
import Http from "config/src/ui/utils/http";

const getDiscoverMovies = (): Promise<ReadonlyArray<Movie>> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/discover/movie/?api_key=${AppConfig.exoArchi.apiKey}`;
  return http.get(apiUrl).then((res) => res.data.results);
};

export default getDiscoverMovies;
