import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

import Movies from "./src/ui/movies";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar style="light" />
      <Movies />
    </ApplicationProvider>
  );
}
