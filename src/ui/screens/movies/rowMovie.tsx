import React, { ReactElement } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MovieTransformed } from "core/domain/models";

const RowMovie = ({ movie }: { movie: MovieTransformed }): ReactElement => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: movie.poster }} />
      <View style={styles.infos}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 80, height: 100 },
  title: {
    fontSize: 15,
    fontWeight: "300",
    paddingLeft: 10,
  },
  overview: {
    color: "#999",
    paddingLeft: 10,
  },
  item: {
    paddingTop: 10,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  infos: {
    width: "55%",
  },
});

export default RowMovie;
