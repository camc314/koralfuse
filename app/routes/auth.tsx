import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectServerScreen from '../scenes/auth/SelectServer';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';

const Stack = createStackNavigator();

import { useColorScheme } from 'react-native-appearance';

export default function AuthStack(): JSX.Element {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="SelectServer" component={SelectServerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
