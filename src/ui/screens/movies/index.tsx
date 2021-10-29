import React, { useEffect, ReactElement } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LoadingComponent, ErrorComponent } from "ui/components";
import { fetchMovies } from "ui/store/slices/moviesSlice";
import { RootState } from "ui/store";
import RowMovie from "./rowMovie";

type MoviesType = {
  navigation: {
    navigate: (root: string, params: { id: number; title: string }) => void;
  };
};

const Movies = ({ navigation }: MoviesType): ReactElement => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({ limit: 15 }));
  }, []);

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;

  return (
    <View testID="movies">
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => dispatch(fetchMovies({ limit: 15 }))}
          />
        }
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
