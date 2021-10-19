import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "./movies";
import Wishlist from "./wishlist";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{ title: "Last outing" }}
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
