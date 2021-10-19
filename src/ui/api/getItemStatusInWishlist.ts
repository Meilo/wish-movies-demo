import AppConfig from "config/app.json";
import Http from "../utils/http";

const getItemStatusInWishlist = async (movieId: number): Promise<boolean> => {
  const http = new Http();
  const apiUrl = `${
    AppConfig.exoArchi.apiUrl
  }/list/7103256/item_status?api_key=${
    AppConfig.exoArchi.apiKey
  }&movie_id=${String(movieId)}`;
  const res = await http.get(apiUrl);
  return res.data.item_present;
};

export default getItemStatusInWishlist;
