import { Wishlist } from "domain/models";
import { Movies } from "domain/fixtures";

const getMyWishlist = (): Promise<Wishlist> => {
  return Promise.resolve({
    id: 1,
    name: "myWishlist",
    items: [Movies[0]],
  });
};
export default getMyWishlist;
