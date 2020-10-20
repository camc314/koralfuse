import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';

import HomeScreen from '../scenes/home/Home';
import LibraryScreen from '../scenes/home/Library';
import PlayScreen from '../scenes/home/Play';
import ItemScreen from '../scenes/home/Item';
import SettingsScreen from '../scenes/home/UserSettings';
import AboutScreen from '../scenes/home/UserSettings/About';

export type RootStackParamList = {
  Home: undefined;
  Library: { libraryId: string };
  Play: { itemId: string };
  Item: { itemId: string };
  'User Settings': undefined;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

import { useColorScheme } from 'react-native-appearance';

export default function HomeStack(): JSX.Element {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
        <Stack.Screen name="User Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
