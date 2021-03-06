import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ErrorComponent = () => (
  <View style={styles.container}>
    <Text>An error detected</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
