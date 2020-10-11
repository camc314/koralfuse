import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Text } from 'react-native';

import AuthStack from './routes/auth';
import HomeStack from './routes/home';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = React.createContext({});

interface state {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

type Action =
  | { type: 'RESTORE_TOKEN'; token: string }
  | { type: 'SIGN_IN'; token: string }
  | { type: 'SIGN_OUT' };

export default function router(): JSX.Element {
  const [state, dispatch] = React.useReducer(
    (prevState: state, action: Action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = '';

      try {
        userToken = (await AsyncStorage.getItem('userToken')) as string;
      } catch (error) {
        console.error(error);
      }

      // console.log(userToken)

      // if (userToken) {
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      // } else {
      //   dispatch({ type: 'SIGN_OUT' });
      // }
    };

    bootstrapAsync();
  });

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        dispatch({ type: 'SIGN_IN', token: '' });
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_IN', token: '' });
      }
    }),
    []
  );

  if (state.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <AppearanceProvider>
      <AuthContext.Provider value={authContext}>
        {state.userToken === null ? <AuthStack /> : <HomeStack />}
      </AuthContext.Provider>
    </AppearanceProvider>
  );
}
