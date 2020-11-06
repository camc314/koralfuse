import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Text } from 'react-native';

import AuthStack from './routes/auth';
import HomeStack from './routes/home';
import AsyncStorage from '@react-native-community/async-storage';
import {
  api,
  initItemsApi,
  initMediaInfoApi,
  initUserLibraryApi,
  initTvShowsApi,
  initLibraryApi,
  initPlayStateApi,
  initItemsRefreshApi
} from '../app/services/api';

const AuthContext = React.createContext({});

interface state {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
  userInfo: string | null;
  baseUrl: string | null;
}

type Action =
  | { type: 'RESTORE_TOKEN'; token: string; userInfo: string; baseUrl: string }
  | { type: 'SIGN_IN'; token: string; userInfo: string; baseUrl: string }
  | { type: 'SIGN_OUT' };

export default function router(): JSX.Element {
  const [state, dispatch] = React.useReducer(
    (prevState: state, action: Action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            userInfo: action.userInfo,
            baseUrl: action.baseUrl
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userInfo: action.userInfo,
            baseUrl: action.baseUrl
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userInfo: null,
            baseUrl: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userInfo: null,
      baseUrl: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = '';
      let userInfo = '';
      let baseUrl = '';

      try {
        userToken = (await AsyncStorage.getItem('userToken')) as string;
        userInfo = (await AsyncStorage.getItem('userInfo')) as string;
        baseUrl = (await AsyncStorage.getItem('baseUrl')) as string;
        await initUserLibraryApi();
        await initItemsApi();
        await initMediaInfoApi();
        await initTvShowsApi();
        await initLibraryApi();
        await initPlayStateApi();
        await initItemsRefreshApi();
      } catch (error) {
        console.error(error);
      }

      dispatch({
        type: 'RESTORE_TOKEN',
        token: userToken,
        userInfo: userInfo,
        baseUrl: baseUrl
      });
    };

    bootstrapAsync();
  });

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        dispatch({ type: 'SIGN_IN', token: '', userInfo: '', baseUrl: '' });
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_IN', token: '', userInfo: '', baseUrl: '' });
      }
    }),
    []
  );

  if (state.isLoading) {
    return <Text>Loading...</Text>;
  }
  if (state.baseUrl) {
    api.baseUrl = state.baseUrl;
  }
  if (state.userInfo) {
    api.userInfo = JSON.parse(state.userInfo);
  }

  return (
    <AppearanceProvider>
      <AuthContext.Provider value={authContext}>
        {state.userToken === null ||
        state.userInfo === null ||
        state.baseUrl === null ? (
          <AuthStack />
        ) : (
          <HomeStack />
        )}
      </AuthContext.Provider>
    </AppearanceProvider>
  );
}
