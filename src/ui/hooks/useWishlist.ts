import { useState } from "react";
import wishlistControllerHandler from "ui/services/handleControllers/wishlistControllerHandler";

const vm = wishlistControllerHandler.vm;
const wishlist = wishlistControllerHandler.controller;

const useWishlist = (movieId: number, updater?: () => void) => {
  const [msg, setMsg] = useState<string | undefined>(vm.msg);
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const [error, setError] = useState<any>(null);

  const stateManagment = () => {
    if (vm.msg) {
      setMsg(vm.msg);
      setIsLoading(vm.loading);
      if (updater) updater();
    }
  };

  const addMovie = async () => {
    try {
      await wishlist.add(movieId);
      stateManagment();
    } catch (err) {
      setError(err);
    }
  };

  const removeMovie = async () => {
    try {
      await wishlist.remove(movieId);
      stateManagment();
    } catch (err) {
      setError(err);
    }
  };
  return {
    addMovie,
    removeMovie,
    msg,
    error,
    isLoading,
  };
};

export default useWishlist;
