import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Home";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
