import AppConfig from "config/app.json";
import { Wishlist } from "core/domain/models";
import Http from "../utils/http";

const getMyWishlist = async (): Promise<Wishlist> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/list/7103256?api_key=${AppConfig.exoArchi.apiKey}&language=en-US`;
  const res = await http.get(apiUrl);
  return res.data;
};

export default getMyWishlist;
