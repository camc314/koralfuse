import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { RootStackParamList } from '../../routes/home';

import { useTheme } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function home({ navigation }: Props): JSX.Element {
  const { colors } = useTheme();

  const handleLogout = () => {
    AsyncStorage.clear();
  };

  return (
    <ScrollView
      style={{
        height: '100%',
        flex: 1
      }}
    >
      <Pressable
        style={{ flex: 1, marginHorizontal: 20, marginVertical: 10 }}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={{ fontSize: 20, color: colors.text }}>About</Text>
      </Pressable>
      <View
        style={{
          borderTopColor: '#888',
          borderTopWidth: 1,
          marginHorizontal: 20
        }}
      />
      <Pressable
        style={{ flex: 1, marginHorizontal: 20, marginVertical: 10 }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 20, color: colors.text }}>Logout</Text>
      </Pressable>
      <View
        style={{
          borderTopColor: '#888',
          borderTopWidth: 1,
          marginHorizontal: 20
        }}
      />
    </ScrollView>
  );
}
