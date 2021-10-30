import React, { ReactElement, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ErrorComponent, NoItemsComponent } from "ui/components";
import { RootState } from "ui/store";
import { fetchWishlist } from "ui/store/slices/wishlistSlice";
import { Navigation } from "../movies";
import RowMovie from "../movies/rowMovie";

const Wishlist = ({ navigation }: Navigation): ReactElement => {
  const dispatch = useDispatch();
  const { wishlist, error } = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchWishlist());
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <View testID="movies">
      <FlatList
        contentContainerStyle={
          wishlist?.movies.length === 0 ? styles.container : {}
        }
        style={styles.flatlist}
        data={wishlist?.movies}
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
        ListEmptyComponent={<NoItemsComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: { height: "100%" },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Wishlist;
