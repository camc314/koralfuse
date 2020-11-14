import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ActivityIndicator, Text } from 'react-native';

export function LoadingComponent(): JSX.Element {
  const [hasTimedOut, sethasTimedOut] = useState(false);
  setTimeout(function () {
    sethasTimedOut(true);
  }, 10000);
  const { t } = useTranslation();
  const { colors } = useTheme();

  if (hasTimedOut) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20
        }}
      >
        <Text
          style={{
            color: colors.text,
            textAlign: 'center',
            fontSize: 25,
            marginBottom: 20
          }}
        >
          {t('loadingTimeout')}
        </Text>
        <Text
          style={{
            color: colors.text,
            textAlign: 'center'
          }}
        >
          {t('onlineAndConnected')}
        </Text>
      </View>
    );
  }

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
