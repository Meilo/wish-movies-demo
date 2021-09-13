import { Wishlist } from "domain/fixtures";

const getItemStatusInWishlist = (movieId: number): Promise<boolean> => {
  const list = Wishlist.items.find((movie) => movie.id === movieId);
  return Promise.resolve(Boolean(list));
};

export default getItemStatusInWishlist;
