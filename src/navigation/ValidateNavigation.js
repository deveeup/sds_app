import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ValidateScreen from '../screens/ValidateScreen';
import { getTranslations } from '../translations';

const Stack = createStackNavigator();

export default function ValidateNavigation() {
  const { validation } = getTranslations();

  return (
    <Stack.Navigator>
      <Stack.Screen name={validation.title} component={ValidateScreen} />
    </Stack.Navigator>
  );
}