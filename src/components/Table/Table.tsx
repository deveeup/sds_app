import React from 'react';
import { View, Text } from 'react-native';
import { Row } from '../Row/Row';
import TableStyles from './TableStyles';
export function Table() {
  return (
    <View style={TableStyles.Container}>
      <Row />
    </View>
  )
};