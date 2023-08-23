import React from 'react';
import { View, Text } from 'react-native';
import RowStyles from './RowStyles';
import { getTranslations } from '../../translations';

export function Row({ title, text, file }: any) {
  const { validation }: any = getTranslations();

  return (
    <View style={RowStyles.Container}>
      <Text style={RowStyles.Title}>{validation[title]}</Text>
      {
        file
          ? <Text style={RowStyles.Text}>FILE_BUTTON!</Text>
          : <Text style={RowStyles.Text}>{String(text.trim())}</Text>
      }
    </View>
  )
}
