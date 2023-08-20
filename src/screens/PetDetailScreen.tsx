import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function PetDetailScreen({ route, navigation }: any) {
  const { itemId, otherParam } = route.params;

  return (
    <SafeAreaView>
      <Text>Pet Details!</Text>
      <Text>{itemId} - {otherParam}</Text>
    </SafeAreaView>
  )
};