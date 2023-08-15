import React, { useContext } from 'react';

import { SafeAreaView, Button, Text } from 'react-native';
import { ContextApi } from '../context';

export default function LanguageScreen() {

  const { state, changeState } = useContext(ContextApi);

  return (
    <SafeAreaView>
      <Text>{state.language}</Text>
      <Button title='theButton' onPress={() => changeState({ language: 'ES' })} />
    </SafeAreaView>
  )
};