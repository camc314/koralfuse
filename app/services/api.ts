import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Configuration, ItemsApi, UserApi } from './fetch-api';

export const getHeaders = async (replace: boolean): Promise<string> => {
  if (!replace && (await AsyncStorage.getItem('userToken'))) {
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

const getBaseUrl = async (): Promise<string> => {
  const url = await AsyncStorage.getItem('baseUrl');
  return url ? url : '';
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

interface ApiInterface {
  ItemsApi: ItemsApi;
  UserApi: UserApi;
}

export const api = {} as ApiInterface;

export const initUserApi = async (): Promise<void> => {
  const token = await getHeaders(true);
  const baseUrl = await getBaseUrl();
  api.UserApi = new UserApi(
    new Configuration({
      basePath: baseUrl,
      headers: {
        'X-Emby-Authorization': token
      }
    })
  );
};

export const initItemsApi = async (): Promise<void> => {
  const token = await getHeaders(false);
  const baseUrl = await getBaseUrl();
  api.ItemsApi = new ItemsApi(
    new Configuration({
      basePath: baseUrl,
      headers: {
        'X-Emby-Authorization': token
      }
    })
  );
};
