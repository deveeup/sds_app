import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TABS } from "../constants/routes";
import { getTranslations } from "../translations";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeNavigation from "./HomeNavigation";
import ValidateNavigation from "./ValidateNavigation";
import ProfileNavigation from "./ProfileNavigation";
import LanguageNavigation from "./LanguageNavigation";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabs() {
  const { routes } = getTranslations();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          style: {
            backgroundColor: "red",
          },
        },
      }}
    >
      <Tab.Screen
        component={HomeNavigation}
        name={TABS.HOME}
        options={{
          tabBarLabel: routes.home,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={TABS.VALIDATE}
        component={ValidateNavigation}
        options={{
          tabBarLabel: routes.validation,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="check-decagram"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TABS.PROFILE}
        component={ProfileNavigation}
        options={{
          tabBarLabel: routes.profile,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={TABS.LANGUAGE}
        component={LanguageNavigation}
        options={{
          tabBarLabel: routes.language,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tooltip-text-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
