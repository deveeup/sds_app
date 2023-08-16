import React, { useContext } from 'react';

import { SafeAreaView, Button, Text } from 'react-native';
import { ContextApi } from '../context';

export default function LanguageScreen() {

  const { state, changeState } = useContext(ContextApi);

  return (
    <SafeAreaView>
      <Text>{state.spanish ? 'ES' : 'EN'}</Text>
      <Button title='Change language' onPress={() => changeState({ spanish: !state.spanish })} />
    </SafeAreaView>
  )
};