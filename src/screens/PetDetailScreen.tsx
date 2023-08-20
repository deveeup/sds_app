import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getData } from '../api/get';

export default function PetDetailScreen({ route, navigation }: any) {
  useEffect(() => {
    (async () => {
      await getPet();
    })();
  }, []);

  const { petId } = route.params;
  const getPet = async () => {
    try {
      const response = await getData(`dog/SA-${petId}`);
      console.log(response);

    } catch(error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Pet Details!</Text>
      <Text>{petId}</Text>
    </SafeAreaView>
  )
};