import React, { ReactElement } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useMovies from "ui/hooks/useMovies";

import { LoadingComponent, ErrorComponent } from "ui/components";
import useWishlist from "ui/hooks/useWishlist";

const MovieDetails = ({
  route,
}: {
  route: { params: { id: number; title: string } };
}): ReactElement => {
  const { data, isLoading, error, retry } = useMovies({
    movieId: route.params.id,
    toTransformed: false,
  });
  const { addMovie } = useWishlist(route.params.id, retry);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  return data.length > 0 ? (
    <View testID={data[0].title}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: data[0].poster }}
      >
        <ScrollView style={styles.card}>
          <Text style={styles.title}>{data[0].title}</Text>
          <Text style={styles.text}>{data[0].overview}</Text>
          <TouchableOpacity style={styles.button} onPress={() => addMovie()}>
            <Text style={styles.center}>
              {data[0].isInWishlist ? `Remove to wishlist` : `Add to wishlist`}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  ) : (
    <View testID="NoMovie" />
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
