import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { getProducts } from '../api/products';
export default function HomeScreen({ navigation }: any) {

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      console.log(response);

    } catch(error) {
      console.error(error);
    }
  }

  const goValidate = () => {
    navigation.navigate("Validate")
  };
  return (
    <SafeAreaView>
      <Text>This is home!</Text>
      <Button onPress={goValidate} title="go validate" />
    </SafeAreaView>
  )
};