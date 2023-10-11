import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContextApi } from "../../context";
import { getTranslations } from "../../translations";
import { getData } from "../../api/get";
import { COLORS } from "../../constants/colors";
import ProfileStyles from "./styles";
import { ROUTES } from "../../constants/routes";

export default function ProfileScreen({ navigation }: any) {
  const { login } = useContext(ContextApi);
  const { profile } = getTranslations();
  const [error, setError] = useState('');
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
    onSubmit: async ({ certificationNumber, password }) => {
      const user = await getData(`dog/SA-${certificationNumber}`);
      if (String(user.password) === String(password)) {
        await login(user);
      } else {
        setError(profile.errorLogin);
      }
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
          placeholder={`2809130`}
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
          {error && (<Text style={ProfileStyles.Error}>{error}</Text>)}
      </View>
    </SafeAreaView>
  )
};