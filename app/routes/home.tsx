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

export type RootStackParamList = {
  Home: undefined;
  Library: { libraryId: string };
  Play: { itemId: string };
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
