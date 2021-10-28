import React, { ReactElement } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

import { LoadingComponent, ErrorComponent } from "ui/components";
import useMovies from "ui/hooks/useMovies";
import RowMovie from "./rowMovie";

type MoviesType = {
  navigation: {
    navigate: (root: string, params: { id: number; title: string }) => void;
  };
};

const Movies = ({ navigation }: MoviesType): ReactElement => {
  const { data, error, isLoading, retry } = useMovies({ limit: 15 });

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  return (
    <View testID="movies">
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => retry()} />
        }
        style={styles.flatlist}
        data={data}
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
            <RowMovie movie={item} updateMoviesList={retry} />
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
