import React, { ReactElement } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import RowMovie from "./rowMovie";
import useMovies from "../hooks/useMovies";

const Movies = (): ReactElement => {
  const { data, error, isLoading } = useMovies({ limit: 15 });

  if (error)
    return (
      <View style={styles.container}>
        <Text>An error detected</Text>
      </View>
    );

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );

  return data ? (
    <View testID="movies">
      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({ item }) => <RowMovie movie={item} />}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Movies not found</Text>
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
