import { useState } from "react";
import wishlistControllerHandler from "ui/services/handleControllers/wishlistControllerHandler";

const useWishlist = (movieId: number, updater?: () => void) => {
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<any>(null);
  const vm = wishlistControllerHandler.vm;
  const [isLoading, setIsLoading] = useState<boolean>(vm.loading);
  const wishlistController = wishlistControllerHandler.controller;
  const addMovie = async () => {
    try {
      await wishlistController.add(movieId);
      if (vm.msg) {
        setMsg(vm.msg);
        setIsLoading(vm.loading);
        if (updater) updater();
      }
    } catch (err) {
      setError(err);
    }
  };

  const removeMovie = async () => {
    try {
      await wishlistController.remove(movieId);
      if (vm.msg) {
        setMsg(vm.msg);
        setIsLoading(vm.loading);
        if (updater) updater();
      }
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
