import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ValidateScreen from "../screens/ValidateScreen";
import { ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default function ValidateNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.VALIDATE} component={ValidateScreen} />
    </Stack.Navigator>
  );
}