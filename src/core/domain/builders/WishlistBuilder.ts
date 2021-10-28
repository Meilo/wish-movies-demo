import { WishlistRepositories } from "core/adapters/types";
import { WishlistTransformed } from "../models";

let vm: {
  wishlist?: WishlistTransformed;
  loading: boolean;
  msg?: string;
} = {
  wishlist: undefined,
  loading: true,
  msg: undefined,
};

export const WishlistBuilder = {
  presenter: {
    vm,
    displayWishlistLoading: () => {
      vm.loading = true;
    },
    displayWishlist: (wishlist: WishlistTransformed) => {
      vm.wishlist = wishlist;
      vm.loading = false;
    },
    displayMessage: (msg: string) => {
      vm.msg = msg;
      vm.loading = false;
    },
  },
  repositories: (repositories: WishlistRepositories) => {
    return {
      getItemStatusInWishlist: (movieId: number) => {
        return repositories.getItemStatusInWishlist(movieId);
      },
      getMyWishlist: () => {
        return repositories.getMyWishlist();
      },
      addMovieInWishlist: (movieId: number) => {
        return repositories.addMovieInWishlist(movieId);
      },
      removeMovieInWishlist: () => {
        return repositories.removeMovieInWishlist();
      },
    };
  },
};
