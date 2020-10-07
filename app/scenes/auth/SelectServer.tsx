import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Button from '../../components/button';
import { useColorScheme } from 'react-native-appearance';

export default function selectServer(): JSX.Element {
  const { colors } = useTheme();
  const [serverUrl, setUrl] = useState('http://192.168.0.100:8096');

  const checkServer = () => {
    console.log('Check Server');
  };

  const scheme = useColorScheme();

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        width: '100%'
      }}
    >
      <TextInput
        style={[
          {
            color: colors.text,
            marginVertical: 10,
            borderRadius: 10,
            marginHorizontal: 10,
            maxWidth: 300,
            padding: 20,
            width: '100%'
          },
          scheme === 'light'
            ? { backgroundColor: '#ddd' }
            : { backgroundColor: '#4c4c4c' }
        ]}
        value={serverUrl}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={checkServer}
        onChangeText={(text) => setUrl(text)}
        placeholder="https://example.com"
      />
      <Button text="Connect To Server" onPress={checkServer} />
    </View>
  );
}
