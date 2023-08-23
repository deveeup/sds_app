import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { getData } from '../../api/get';
import PetDetailStyles from './styles';
import { Table } from '../../components/Table/Table';

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
    <SafeAreaView style={PetDetailStyles.Container}>
      <View style={PetDetailStyles.ImageContainer}>
        <Image
          style={PetDetailStyles.PetImage}
          source={{
            uri: petData.image,
          }}
          />
        <Image
          style={PetDetailStyles.ImageContainerIcon}
          source={require('../../assets/images/verified.png')}
        />
      </View>
      <Text style={PetDetailStyles.Title}>
        {String(petData.name).toUpperCase()}
      </Text>
      <Table petData={petData} />
    </SafeAreaView>
  )
};
