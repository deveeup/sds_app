import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getTranslations } from '../translations';
import { ROUTES } from "../constants/routes";
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  const { routes } = getTranslations();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={ROUTES.HOME}
        options={{ title: routes.home }}
      />
    </Stack.Navigator>
  );
}