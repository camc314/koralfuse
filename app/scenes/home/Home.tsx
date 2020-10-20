import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, Text, View } from 'react-native';

import { RootStackParamList } from '../../routes/home';
import { api } from '../../services/api';
import { AuthenticationResult, BaseItemDto } from '../../services/fetch-api';
import HomeSection from '../../components/HomeSection';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function home({ navigation }: Props): JSX.Element {
  const [libraries, setLibraries] = useState([] as BaseItemDto[]);
  const [itemsResume, setItemsResume] = useState([] as BaseItemDto[]);
  const [itemsLatestMovies, setItemsLatestMovies] = useState(
    [] as BaseItemDto[]
  );
  const [itemsLatestTv, setItemsLatestTv] = useState([] as BaseItemDto[]);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('User Settings')}
          title={api.userInfo.user?.name || 'User Settings'}
        />
      )
    });

    AsyncStorage.getItem('userInfo').then((userInfo) => {
      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo) as AuthenticationResult;

        // Get Libraries
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

        // Get Media to Resume
        api.ItemsApi.getResumeItems({
          userId: userInfoParsed.user?.id || ''
        }).then((res) => {
          console.log(res);
          if (res.items) {
            setItemsResume(res.items);
          }
        });

        // Get Latest Movies
        api.UserLibraryApi.getLatestMedia({
          userId: userInfoParsed.user?.id || '',
          includeItemTypes: 'movie'
        }).then((result) => {
          if (result) {
            setItemsLatestMovies(result);
          }
        });

        // Get Latest TV Shows
        api.UserLibraryApi.getLatestMedia({
          userId: userInfoParsed.user?.id || '',
          includeItemTypes: 'series'
        }).then((result) => {
          if (result) {
            setItemsLatestTv(result);
          }
        });
      }
    });
  }, []);

  const goToLibraries = (
    libraryId: string | undefined,
    libraryName: string | undefined
  ) => {
    if (libraryId) {
      navigation.navigate('Library', {
        libraryId: libraryId,
        libraryName: libraryName || ''
      });
    } else {
      console.error('Missing library Id');
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
                  onPress={() => goToLibraries(data.id, data.name || '')}
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
      <HomeSection sectionType="resumeItems" data={itemsResume} />
      <HomeSection sectionType="latestMovies" data={itemsLatestMovies} />
      <HomeSection sectionType="latestTv" data={itemsLatestTv} />
    </ScrollView>
  );
}
