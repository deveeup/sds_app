import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ValidateScreen from '../screens/Validate/ValidateScreen';
import PetDetailScreen from '../screens/PetDetail/PetDetailScreen';
import { getTranslations } from "../translations";
import { ROUTES } from '../constants/routes';

const Stack = createStackNavigator();

export default function ValidateNavigation() {
  const { routes } = getTranslations();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ValidateScreen}
        name={ROUTES.VALIDATE}
        options={{ title: routes.validation }}
      />
      <Stack.Screen
        component={PetDetailScreen}
        name={ROUTES.PET_DETAILS}
        options={{ title: routes.petValidation }}
      />
    </Stack.Navigator>
  );
}