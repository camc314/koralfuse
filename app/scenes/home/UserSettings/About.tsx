import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';

import { useTheme } from '@react-navigation/native';
import ButtonComponent from '../../../components/button';

export default function home(): JSX.Element {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        height: '100%',
        flex: 1
      }}
    >
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 30,
            color: colors.text,
            marginBottom: 20,
            marginTop: 10
          }}
        >
          KoralFuse
        </Text>
        <Text style={{ fontSize: 20, color: colors.text, marginBottom: 20 }}>
          @Camc314
        </Text>
        <Text style={{ fontSize: 20, color: colors.text, marginBottom: 20 }}>
          0.0.1
        </Text>
        <View style={{ marginBottom: 20 }}>
          <ButtonComponent
            onPress={() =>
              Linking.openURL('http://github.com/camc314/koralfuse')
            }
            text="View this Project on Github"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <ButtonComponent
            onPress={() => Linking.openURL('http://github.com/jellyfin')}
            text="View the Jellyfin Project on Github"
          />
        </View>
      </View>
    </ScrollView>
  );
}
