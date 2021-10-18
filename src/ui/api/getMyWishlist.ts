import AppConfig from "config/app.json";
import { Wishlist } from "core/domain/models";
import Http from "../utils/http";

const getMyWishlist = (): Promise<Wishlist> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/list/7103256?api_key=${AppConfig.exoArchi.apiKey}&language=en-US`;
  return http.get(apiUrl).then((res) => res.data);
};

export default getMyWishlist;
