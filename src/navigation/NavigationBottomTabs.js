import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeNavigation from "./HomeNavigation";
import ValidateNavigation from "./ValidateNavigation";
import ShopNavigation from "./ShopNavigation";
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
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-alert"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SHOP}
        component={ShopNavigation}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-alert"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
