import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeNavigation from "./HomeNavigation";
import ValidateNavigation from "./ValidateNavigation";
import ProfileNavigation from "./ProfileNavigation";
import LanguageScreen from '../screens/LanguageScreen';
import { ROUTES } from "../constants/routes";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeNavigation}
        name={ROUTES.HOME}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.VALIDATE}
        component={ValidateNavigation}
        options={{
          tabBarLabel: "Validation",
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
        name={ROUTES.PROFILE}
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.LANGUAGE}
        component={LanguageScreen}
        options={{
          tabBarLabel: "Language",
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
};
