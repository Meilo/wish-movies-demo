import React, { useState, useEffect } from "react";
import { Movies } from "adapter/controllers";
import { getDiscoverMovies } from "view/api";

const useMovies = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const showMovies = async () => {
    try {
      const movies = new Movies(() => getDiscoverMovies());
      setData(await movies.getMovies(5));
      setIsLoading(movies.isLoading);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    showMovies();
  }, []);

  return {
    data,
    isLoading,
    error,
    retry: showMovies,
  };
};

export default useMovies;
