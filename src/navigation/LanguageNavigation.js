import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageScreen from "../screens/Language/LanguageScreen";
import { ROUTES } from '../constants/routes';
import { getTranslations } from "../translations";

const Stack = createStackNavigator();

export default function LanguageNavigation() {
  const { routes } = getTranslations();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LanguageScreen}
        name={ROUTES.LANGUAGE}
        options={{ title: routes.language }}
      />
    </Stack.Navigator>
  );
}