import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { api } from '../../services/api';
import { AuthenticationResult, BaseItemDto } from '../../services/fetch-api';
import { card } from '../../components/Card';
import AsyncStorage from '@react-native-community/async-storage';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';

type Props = StackScreenProps<RootStackParamList, 'Library'>;

export default function LibraryView({ route }: Props): JSX.Element {
  const [libraryItem, setLibraryItems] = useState([] as BaseItemDto[]);
  const deviceWidth = Dimensions.get('window').width;
  const theme = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then((userInfo) => {
      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo) as AuthenticationResult;
        api.ItemsApi.getItems({
          uId: userInfoParsed?.user?.id || '',
          userId: userInfoParsed?.user?.id,
          parentId: route.params.libraryId
        }).then((results) => {
          if (results.items) {
            setLibraryItems(results.items);
          }
        });
      }
    });
  }, []);

  return (
    <View>
      <FlatList
        data={libraryItem}
        renderItem={(item) => card(item, theme)}
        horizontal={false}
        removeClippedSubviews={true}
        numColumns={Math.floor(deviceWidth / 150)}
        style={{
          height: '100%'
        }}
      />
    </View>
  );
}
