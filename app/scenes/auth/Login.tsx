import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Button from '../../components/button';
import { useColorScheme } from 'react-native-appearance';
import { getHeaders, api, initUserApi } from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function selectServer(): JSX.Element {
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    initUserApi();
  }, []);

  const login = async () => {
    try {
      const response = await api.UserApi.authenticateUserByName({
        authenticateUserByName: { username: username, pw: password }
      });
      const headers = await getHeaders(false);
      if (response.user) {
        // Redirect To Home Screen
        console.log('Logged In!');
        AsyncStorage.setItem(
          'userToken',
          `${headers}, Token="${response.accessToken}"`
        );
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
        value={username}
        autoCapitalize="none"
        autoCompleteType="username"
        autoCorrect={false}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
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
        value={password}
        autoCapitalize="none"
        autoCompleteType="password"
        secureTextEntry={true}
        autoCorrect={false}
        onSubmitEditing={login}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />
      <Button text="Login" onPress={login} />
    </View>
  );
}
