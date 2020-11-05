import React, { useEffect, useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Button from '../../components/button';
import { useColorScheme } from 'react-native-appearance';
import { getHeaders, api, initUserApi } from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useTranslation } from 'react-i18next';

export default function selectServer(): JSX.Element {
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

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
        await AsyncStorage.setItem(
          'userToken',
          `${headers}, Token="${response.accessToken}"`
        );
        await AsyncStorage.setItem('userInfo', JSON.stringify(response));
        api.userInfo = response;
      }
    } catch (error) {
      if (error.status === 401 || error.status === 500) {
        Alert.alert(t('invalidLogin'));
      } else {
        Alert.alert(t('badRequest'));
      }
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
        placeholder={t('username')}
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
        placeholder={t('password')}
      />
      <Button text={t('login')} onPress={login} marginHorizontal={10} />
    </View>
  );
}
