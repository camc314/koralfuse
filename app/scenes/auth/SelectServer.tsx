import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function selectServer(): JSX.Element {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Select Server Page</Text>
    </View>
  );
}
