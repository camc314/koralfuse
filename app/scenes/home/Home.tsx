import React from 'react';
import { Text, View } from 'react-native';

export default function home(): JSX.Element {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Text>Home Page</Text>
    </View>
  );
}
