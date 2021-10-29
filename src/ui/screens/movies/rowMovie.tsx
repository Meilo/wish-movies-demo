import React, { ReactElement } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { MovieTransformed } from "core/domain/models";
import useWishlist from "ui/hooks/useWishlist";
import { fetchMovies } from "ui/store/slices/moviesSlice";

const RowMovie = ({ movie }: { movie: MovieTransformed }): ReactElement => {
  const dispatch = useDispatch();
  const { addMovie, removeMovie } = useWishlist(movie.id, () =>
    dispatch(fetchMovies({ limit: 15 }))
  );
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: movie.poster }} />
      <View style={styles.infos}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (movie.isInWishlist ? removeMovie() : addMovie())}
      >
        <Text style={styles.center}>
          {movie.isInWishlist ? `Remove` : `Add`}
        </Text>
      </TouchableOpacity>
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
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  infos: {
    width: "55%",
  },
  button: {
    width: 105,
    height: 30,
    backgroundColor: "#F12",
    justifyContent: "center",
    borderRadius: 5,
  },
  center: {
    color: "#FFF",
    textAlign: "center",
  },
});

export default RowMovie;
