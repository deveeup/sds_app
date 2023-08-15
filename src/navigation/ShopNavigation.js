import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from "../screens/ShopScreen";
import { ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default function ShopNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.SHOP} component={ShopScreen} />
    </Stack.Navigator>
  );
}