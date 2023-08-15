import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';
import { ContextApi } from '../context';
export default function ValidateScreen() {
  const { state: { translations }, state} = useContext(ContextApi);
  const [text, onChangeText] = useState('Useless Text');
  return (
    <SafeAreaView>
      <Text>{state?.language}</Text>
      <Text>{state?.translations?.VALIDATION_TITLE}</Text>
      <Text>Verify Animal Registration</Text>
      <Text>
        Services Dog School is the nation's largest Support Animal registry. Enter your registration number (found on your animal's ID, begins with either ES- or SA-) below to verify your animal's registration information. Please click on the next tab to verify your ESA Letter. Any questions? Email us at support@servicesdogschool.com
      </Text>
      <View style={styles.boxContainer}>
        <Text style={styles.sa}>SA</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sa: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'gray',
    padding: 10,
    color: 'white',
    overflow: 'hidden',
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    background: 'white',
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '50%',
    borderColor: 'gray'
  },
});
