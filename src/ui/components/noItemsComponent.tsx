import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NoItemsComponent = () => (
  <View style={styles.container}>
    <Text>No items yet</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
