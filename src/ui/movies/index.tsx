import React, { ReactElement } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import RowMovie from "./rowMovie";
import useMovies from "../hooks/useMovies";

const Movies = (): ReactElement => {
  const { data, error, isLoading } = useMovies();

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error detected</Text>
      </View>
    );
  }

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );

  if (!data)
    return (
      <View style={styles.container}>
        <Text>Movies not found</Text>
      </View>
    );

  return (
    <View testID="movies">
      <Image style={styles.thumbnail} source={{ uri: data[0].poster }} />
      <FlatList
        data={data}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({ item }) => <RowMovie movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: { width: "100%", height: "50%" },
  image: { width: 80, height: 100 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Movies;
