import React, { ReactElement } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import useMovies from "../hooks/useMovies";

export default function Movies(): ReactElement {
  const { data, isLoading, error } = useMovies();
  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: contact your admin</Text>
      </View>
    );

  return (
    <FlatList
      data={data}
      keyExtractor={(movie) => String(movie.id)}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
