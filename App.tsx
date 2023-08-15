import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import NavigationTabs from "./src/navigation/NavigationBottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
