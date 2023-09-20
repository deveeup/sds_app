import React, { useContext } from "react";
import SafeAreaView from "react-native-safe-area-view";
import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ContextApi } from "../../context";
import { getTranslations } from "../../translations";
import LanguageStyles from "./styles";
import {COLORS} from "../../constants/colors";

export default function LanguageScreen() {
  const { state, changeState } = useContext(ContextApi);
  const { language } = getTranslations();

  return (
    <SafeAreaView>
      <View style={LanguageStyles.Container}>
        <MaterialCommunityIcons name="chat-processing-outline" color={COLORS.VIOLET} size={100} />
        <Text>{language.description} {state.spanish ? "Español" : "English"}</Text>
        <Pressable style={LanguageStyles.Button} onPress={() => changeState({ spanish: !state.spanish })}>
          <Text style={LanguageStyles.Text}>{language.change} {state.spanish ? "Inglés" : "Spanish"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};