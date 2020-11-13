import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function LoadingComponent(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <ActivityIndicator size="small" />
    </View>
  );
}
