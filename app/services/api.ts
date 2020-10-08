import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const getHeaders = async (replace: boolean): Promise<string> => {
  if (!replace) {
    return (await AsyncStorage.getItem('userToken')) || '';
  } else {
    const clientName = 'KoralFuse';
    const clientVersion = '0.0.0';
    const deviceId = uuidv4();
    let deviceName = Platform.OS;
    if (Platform.Version) {
      deviceName += ` ${Platform.Version}`;
    }

    const headers = `MediaBrowser Client="${clientName}", Device="${deviceName}", DeviceId="${deviceId}", Version="${clientVersion}"`;
    return headers;
  }
};

export async function getPublicSysteminfo(baseUrl: string): Promise<any> {
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

type authenticateByNameResponse = {
  status: number;
  data: any;
  headers: string;
};

export async function authenticateByName(
  username: string,
  password: string
): Promise<authenticateByNameResponse> {
  const baseUrl = await AsyncStorage.getItem('baseUrl');

  const headers = await getHeaders(true);

  const response = await fetch(`${baseUrl}/Users/AuthenticateByName`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Emby-Authorization': headers
    },
    body: JSON.stringify({
      username: username,
      pw: password
    })
  });

  const responseJSON = await response.json();
  return { status: response.status, data: responseJSON, headers: headers };
}
