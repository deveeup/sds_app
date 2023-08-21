import React from 'react';
import { View, Text } from 'react-native';
import RowStyles from './RowStyles';

export function Row() {
  return (
    <View style={RowStyles.Container}>
      <Text
        style={RowStyles.Title}
      >
        Test
      </Text>
      <Text
        style={RowStyles.Text}
      >
        Test
      </Text>
    </View>
  )
}
