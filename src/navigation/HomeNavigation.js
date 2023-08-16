import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { getTranslations } from '../translations';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  const { home } = getTranslations();
  return (
    <Stack.Navigator>
      <Stack.Screen name={home.title} component={HomeScreen} />
    </Stack.Navigator>
  );
}