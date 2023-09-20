import React from "react";
import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getTranslations } from "../../translations";
import ProfileStyles from "./styles";
import { COLORS } from "../../constants/colors";

export default function ProfileScreen() {
  const { profile } = getTranslations();

  return (
    <SafeAreaView>
      <View style={ProfileStyles.Container}>
        <Text style={ProfileStyles.Label}>
          {profile.inputCertification}
        </Text>
        <TextInput
          autoCapitalize="none"
          placeholder={`SA-2809130`}
          style={ProfileStyles.Input}
        />
        <Text style={ProfileStyles.Label}>
          {profile.inputPassword}
        </Text>
        <TextInput
          autoCapitalize="none"
          placeholder={profile.placeholderPassword}
          secureTextEntry={true}
          style={ProfileStyles.Input}
        />
          <TouchableHighlight style={ProfileStyles.Button}>
            <Button title={profile.loginButton} color={COLORS.WHITE}/>
          </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
};