import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "./components/movies";
import Wishlist from "./components/wishlist";
import MovieDetails from "./components/movies/movieDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MoviesStack = () => (
  <Stack.Navigator initialRouteName="LastOutingMovies">
    <Stack.Screen
      name="LastOutingMovies"
      component={Movies}
      options={{ title: "Last outing" }}
    />
    <Stack.Screen
      name="MovieDetails"
      component={MovieDetails}
      //@ts-ignore
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ title: "My wishlist" }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
