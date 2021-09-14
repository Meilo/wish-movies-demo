import { StatusBar } from "expo-status-bar";
import React from "react";
import Movies from "view/movies";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Movies />
    </>
  );
}
