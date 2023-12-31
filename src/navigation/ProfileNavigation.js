import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../constants/routes";
import { ContextApi } from "../context";
import { getTranslations } from "../translations";
import LoginScreen from "../screens/Profile/LoginScreen";
import UserScreen from "../screens/Profile/UserScreen";

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  const { routes } = getTranslations();
  const {
    state: { user },
  } = useContext(ContextApi);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!user.name ? (
        <Stack.Screen
          component={UserScreen}
          name={SCREENS.USER}
          options={{ title: routes.user }}
        />
      ) : (
        <Stack.Screen
          component={LoginScreen}
          name={SCREENS.PROFILE}
          options={{ title: routes.profile }}
        />
      )}
    </Stack.Navigator>
  );
}
