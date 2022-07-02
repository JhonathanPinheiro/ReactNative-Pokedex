import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Home";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
