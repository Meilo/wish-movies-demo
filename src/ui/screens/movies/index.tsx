import React, { useEffect, ReactElement } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ErrorComponent } from "ui/components";
import { fetchMovies } from "ui/store/slices/moviesSlice";
import { RootState } from "ui/store";
import RowMovie from "./rowMovie";

export type Navigation = {
  navigation: {
    navigate: (root: string, params: { id: number; title: string }) => void;
    addListener: Function;
  };
};

const Movies = ({ navigation }: Navigation): ReactElement => {
  const dispatch = useDispatch();
  const { movies, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchMovies({ limit: 15 }));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <View testID="movies">
      <FlatList
        style={styles.flatlist}
        data={movies}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MovieDetails", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <RowMovie movie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: { height: "100%" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Movies;
