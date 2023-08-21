import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { getData } from '../api/get';

export default function PetDetailScreen({ route, navigation }: any) {
  useEffect(() => {
    (async () => {
      await getPet();
    })();
  }, []);

  const [petData, setPetData] = useState<any>({});
  const { petId } = route.params;
  const getPet = async () => {
    try {
      const pet = await getData(`dog/SA-${petId}`);
      setPetData(pet);

    } catch(error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Pet Details!</Text>
      <Text>{petId}</Text>
      <Image
        style={styles.petImage}
        source={{
          uri: petData.image,
        }}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  petImage: {
    width: 200,
    height: 200,
  },
});