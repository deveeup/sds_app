import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { ROUTES } from '../constants/routes';
import { getTranslations } from "../translations";

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  const { routes } = getTranslations();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProfileScreen}
        name={ROUTES.PROFILE}
        options={{ title: routes.profile }}
      />
    </Stack.Navigator>
  );
}