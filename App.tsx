import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Navigation from "ui/navigation";
import { store } from "ui/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Navigation />
    </Provider>
  );
}
