import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../routes/home';

import { initItemsApi, api } from '../../services/api';
import { AuthenticationResult, BaseItemDto } from '../../services/fetch-api';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function home({ navigation }: Props): JSX.Element {
  const [libraries, setLibraries] = useState([] as BaseItemDto[]);

  useEffect(() => {
    initItemsApi().then(() => {
      AsyncStorage.getItem('userInfo').then((userInfo) => {
        if (userInfo) {
          const userInfoParsed = JSON.parse(userInfo) as AuthenticationResult;
          api.ItemsApi.getItems({
            uId: userInfoParsed.user?.id || '',
            userId: userInfoParsed.user?.id
          }).then((result) => {
            // Only TV Shows and movies are currently supported
            const filteredResults = result?.items?.filter((item) => {
              return (
                item.collectionType === 'movies' ||
                item.collectionType === 'tvshows'
              );
            });

            if (filteredResults) {
              setLibraries(filteredResults);
            }
          });
        }
      });
    });
  }, []);

  const goToLibraries = (libraryId: string | undefined) => {
    if (libraryId) {
      console.log(`Go To ${libraryId}`);
      navigation.navigate('Library', { libraryId: libraryId });
    } else {
      console.error('Missing libaray Id');
    }
  };

  return (
    <ScrollView
      style={{
        height: '100%',
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10
        }}
      >
        <ScrollView
          style={{
            height: '100%',
            flex: 1
          }}
          horizontal={true}
        >
          {libraries.map((data: BaseItemDto, idx: number) => {
            return (
              <View
                key={idx}
                style={{
                  padding: 10,
                  flexGrow: 1
                }}
              >
                <Pressable
                  onPress={() => goToLibraries(data.id)}
                  style={{
                    backgroundColor: '#007AFF',
                    borderRadius: 10,
                    width: '100%',
                    flex: 1
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 18,
                      color: 'white',
                      margin: 16
                    }}
                  >
                    {data.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
