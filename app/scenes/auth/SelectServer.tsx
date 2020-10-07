import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Button from '../../components/button';
import { useColorScheme } from 'react-native-appearance';

import { getPublicSysteminfo } from '../../services/api';

export default function selectServer(): JSX.Element {
  const { colors } = useTheme();
  const [serverUrl, setUrl] = useState('');

  const checkServer = async () => {
    try {
      const response = await getPublicSysteminfo(serverUrl);

      if (response.Id) {
        // Redirect To Login Screen
        console.log('Success!');
      }
    } catch (error) {
      console.error(error);
    }
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
