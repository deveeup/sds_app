import React from "react";
import { View, Text, Pressable } from "react-native";
import RowStyles from "./RowStyles";
import { getTranslations } from "../../translations";
import { SCREENS } from "../../constants/routes";

export function Row({ title, text, file, navigation }: any) {
  const { validation }: any = getTranslations();

   const renderPDF = () => {
    navigation.navigate(SCREENS.PDF, {
      url: file
    });
  };
  return (
    <View style={RowStyles.Container}>
      <Text style={RowStyles.Title}>{validation[title]}</Text>
      {
        file
          ? (
            <View style={RowStyles.ButtonContainer}>
              <Pressable onPress={renderPDF} style={RowStyles.Button}>
                <Text style={RowStyles.TextButton}>View File</Text>
              </Pressable>
            </View>
          )
          : <Text style={RowStyles.Text}>{String(text.trim())}</Text>
      }
    </View>
  )
}
