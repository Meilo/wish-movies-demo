import React, { ReactElement } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Button, ListItem } from "@ui-kitten/components";

import useMovies from "../hooks/useMovies";

export default function Movies(): ReactElement {
  const { data, error, isLoading } = useMovies();
  if (isLoading || !data)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error</Text>
      </View>
    );
  }

  return (
    <>
      <Image style={styles.thumbnail} source={{ uri: data[0].poster }} />
      <FlatList
        data={data}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.overview}
            accessoryLeft={(props: any) => (
              <Image
                {...props}
                style={[props.style, styles.image]}
                source={{ uri: item.poster }}
              />
            )}
            accessoryRight={() => <Button size="tiny">Add to wishlist</Button>}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  thumbnail: { width: "100%", height: "50%" },
  image: { tintColor: null, width: 80, height: 100 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
