import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}