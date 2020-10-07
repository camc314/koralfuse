import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

import AuthStack from './routes/auth';

export default function router(): JSX.Element {
  return (
    <AppearanceProvider>
      <AuthStack />
    </AppearanceProvider>
  );
}
