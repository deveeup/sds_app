import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants/routes";
import { ContextApi } from "../context";
import { getTranslations } from "../translations";
import ProfileScreen from "../screens/Profile/ProfileScreen";
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
          name={ROUTES.USER}
          options={{ title: routes.user }}
        />
      ) : (
        <Stack.Screen
          component={ProfileScreen}
          name={ROUTES.PROFILE}
          options={{ title: routes.profile }}
        />
      )}
    </Stack.Navigator>
  );
}
