import React, { useEffect } from "react";
import { Text, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { getData } from "../../api/get";
import { getTranslations } from "../../translations";


export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  const { home } = getTranslations();

  const loadProducts = async () => {
    try {
      const response = await getData("products");
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
      <Text>{home.title}</Text>
      <Button onPress={goValidate} title="go validate" />
    </SafeAreaView>
  )
};