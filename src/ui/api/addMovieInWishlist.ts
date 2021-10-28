import AppConfig from "config/app.json";
import Http from "ui/services/http";

const addMovieInWishlist = async (
  movieId: number
): Promise<{ statusCode: number }> => {
  const http = new Http();
  const apiUrl = `${AppConfig.exoArchi.apiUrl}/list/7103256/add_item?api_key=${AppConfig.exoArchi.apiKey}&session_id=${AppConfig.exoArchi.sessionId}`;
  const res = await http.post(apiUrl, { media_id: movieId });
  return { statusCode: res.data.status_code };
};

export default addMovieInWishlist;
