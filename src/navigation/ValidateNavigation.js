import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getTranslations } from "../translations";
import { SCREENS } from "../constants/routes";
import ValidateScreen from "../screens/Validate/ValidateScreen";
import PetDetailScreen from "../screens/PetDetail/PetDetailScreen";
import PDFScreen from "../screens/PDF/pdf";

const Stack = createStackNavigator();

export default function ValidateNavigation() {
  const { routes } = getTranslations();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ValidateScreen}
        name={SCREENS.VALIDATE}
        options={{ title: routes.validation }}
      />
      <Stack.Screen
        component={PetDetailScreen}
        name={SCREENS.PET_DETAILS}
        options={{ title: routes.petValidation }}
      />
      <Stack.Screen
        component={PDFScreen}
        name={SCREENS.PDF}
        options={{ title: routes.petValidation }}
      />
    </Stack.Navigator>
  );
}
