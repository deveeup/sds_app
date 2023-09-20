import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { getTranslations } from "../../translations";
import { ROUTES } from "../../constants/routes";

export default function ValidateScreen({ navigation }: any) {
  const [petId, onChangePetId] = useState("");
  const { validation } = getTranslations();
  const goDetailScreen = () =>
    navigation.navigate(
      ROUTES.PET_DETAILS,
      {petId}
    );

  return (
    <SafeAreaView>
      <Text>{validation.title}</Text>
      <Text>Verify Animal Registration</Text>
      <Text>
        Services Dog School is the nation"s largest Support Animal registry. Enter your registration number (found on your animal"s ID, begins with either ES- or SA-) below to verify your animal"s registration information. Please click on the next tab to verify your ESA Letter. Any questions? Email us at support@servicesdogschool.com
      </Text>
      <View style={styles.boxContainer}>
        <Text style={styles.sa}>SA</Text>
        <TextInput
          onChangeText={onChangePetId}
          placeholder="2809130"
          style={styles.input}
          value={petId}
        />
      </View>
      <Button title="VALIDATE" onPress={() => goDetailScreen()} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sa: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
    padding: 10,
    color: "white",
    overflow: "hidden",
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    borderColor: "gray"
  },
});
