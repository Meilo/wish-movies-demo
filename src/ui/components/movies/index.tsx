import React, { ReactElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { LoadingComponent, ErrorComponent } from "../base-components";
import RowMovie from "./rowMovie";
import useMovies from "../../hooks/useMovies";

interface MoviesType {
  navigation: {
    navigate: (root: string, params: { id: number; title: string }) => void;
  };
}

const Movies = ({ navigation }: MoviesType): ReactElement => {
  const { data, error, isLoading } = useMovies({ limit: 15 });

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  return (
    <View testID="movies">
      <FlatList
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
