import AsyncStorage from '@react-native-community/async-storage';

import { PublicSystemInfo } from './models/SystemInfo';

export async function getPublicSysteminfo(
  baseUrl: string
): Promise<PublicSystemInfo> {
  const response = await fetch(`${baseUrl}/System/Info/Public`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.status === 200) {
    AsyncStorage.setItem('baseUrl', baseUrl);
  }

  const responseJSON = await response.json();

  return responseJSON;
}
