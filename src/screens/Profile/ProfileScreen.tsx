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
  const formik = useFormik({
    initialValues: {
      certificationNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      certificationNumber:
        Yup.string()
          .required(profile.errorCertification)
          .min(7, profile.errorCertificationMin),
      password:
        Yup.string()
          .required(profile.errorPassword),
    }),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Press Login", formValue);
    }
  });

  return (
    <SafeAreaView>
      <View style={ProfileStyles.Container}>
        <Text style={ProfileStyles.Label}>
          {profile.inputCertification}
        </Text>
        <TextInput
          autoCapitalize="none"
          placeholder={`SA-2809130`}
          style={
            formik.errors.certificationNumber
            ? ProfileStyles.InputError
            : ProfileStyles.Input
          }
          value={formik.values.certificationNumber}
          onChangeText={
            (text) => formik.setFieldValue(
              "certificationNumber",
              text
            )
          }
        />
        <Text style={ProfileStyles.ErrorDescription}>
          {formik.errors.certificationNumber}
        </Text>
        <Text style={ProfileStyles.Label}>
          {profile.inputPassword}
        </Text>
        <TextInput
          autoCapitalize="none"
          placeholder={profile.placeholderPassword}
          secureTextEntry={true}
          style={
            formik.errors.password
              ? ProfileStyles.InputError
              : ProfileStyles.Input
          }
          value={formik.values.password}
          onChangeText={
            (text) => formik.setFieldValue(
              "password",
              text
            )
          }
        />
          <Text style={ProfileStyles.ErrorDescription}>
            {formik.errors.password}
          </Text>
          <TouchableHighlight style={ProfileStyles.Button}>
            <Button
              title={profile.loginButton}
              color={COLORS.WHITE}
              onPress={() => formik.handleSubmit()}
            />
          </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
};