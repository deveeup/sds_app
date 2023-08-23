import React from 'react';
import { View, Text } from 'react-native';
import { Row } from '../Row/Row';
import TableStyles from './TableStyles';
export function Table({ petData }: any) {
  return (
    <View style={TableStyles.Container}>
      {Object.entries(petData).sort().map((item: any) => {
        switch (item[0]) {
          case 'certificate':
            return <Row title={item[0]} file={item[1]} />;
          case 'findPet':
            return;
          case 'image':
            return;
          case 'loading':
            return;
          case 'name':
            return;
          case 'password':
            return;
          case 'license':
            return <Row title={item[0]} file={item[1]} />;
          default:
            return <Row title={item[0]} text={item[1]} />
        }
      })}
    </View>
  )
};