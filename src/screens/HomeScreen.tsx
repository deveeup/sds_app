import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { getData } from '../api/get';

export default function HomeScreen({ navigation }: any) {

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getData('products');
      console.log(response);

    } catch(error) {
      console.error(error);
    }
  }

  const goValidate = () => {
    navigation.navigate("Validation")
  };
  return (
    <SafeAreaView>
      <Text>This is home!</Text>
      <Button onPress={goValidate} title="go validate" />
    </SafeAreaView>
  )
};