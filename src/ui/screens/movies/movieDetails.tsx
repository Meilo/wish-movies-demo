import React, { ReactElement, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LoadingComponent, ErrorComponent } from "ui/components";
import useWishlist from "ui/hooks/useWishlist";
import { RootState } from "ui/store";
import { fetchMovie } from "ui/store/slices/movieSlice";
import { fetchMovies } from "ui/store/slices/moviesSlice";

const MovieDetails = ({
  route,
}: {
  route: { params: { id: number; title: string } };
}): ReactElement => {
  const dispatch = useDispatch();
  const { movie, loading, error } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovie({ movieId: route.params.id, toTransformed: false }));
  }, []);

  const { addMovie, removeMovie } = useWishlist(route.params.id, () => {
    dispatch(fetchMovie({ movieId: route.params.id, toTransformed: false }));
    dispatch(fetchMovies({ limit: 15 }));
  });

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;
  if (!movie) return <View />;

  return (
    <View testID={movie.title}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: movie.poster }}
      >
        <ScrollView style={styles.card}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.text}>{movie.overview}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => (movie.isInWishlist ? removeMovie() : addMovie())}
          >
            <Text style={styles.center}>
              {movie.isInWishlist ? `Remove to wishlist` : `Add to wishlist`}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 250,
    padding: 10,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
  },
  text: {
    color: "#999",
    fontSize: 12,
    paddingBottom: 10,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#F12",
    justifyContent: "center",
    borderRadius: 5,
  },
  center: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
});

export default MovieDetails;
