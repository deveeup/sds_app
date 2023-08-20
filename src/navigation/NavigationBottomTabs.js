import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigation from './HomeNavigation';
import ValidateNavigation from './ValidateNavigation';
import ProfileNavigation from './ProfileNavigation';
import LanguageNavigation from "./LanguageNavigation";
import { ROUTES } from '../constants/routes';
import { getTranslations } from '../translations';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabs() {
  const { routes } = getTranslations();

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeNavigation}
        name={ROUTES.HOME}
        options={{
          tabBarLabel: routes.home,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.VALIDATE}
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
        name={ROUTES.PROFILE}
        component={ProfileNavigation}
        options={{
          tabBarLabel: routes.profile,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.LANGUAGE}
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
};
