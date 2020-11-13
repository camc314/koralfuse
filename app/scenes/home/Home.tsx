import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  ActionSheetIOS,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';

import { RootStackParamList } from '../../routes/home';
import { api } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';
import HomeSection from '../../components/HomeSection';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { LoadingComponent } from '../../components/LoadingComponent';
import { useTranslation } from 'react-i18next';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function home({ navigation }: Props): JSX.Element {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [libraries, setLibraries] = useState([] as BaseItemDto[]);
  const [itemsResume, setItemsResume] = useState([] as BaseItemDto[]);
  const [itemsNextUp, setItemsNextUp] = useState([] as BaseItemDto[]);
  const [itemsLatestMovies, setItemsLatestMovies] = useState(
    [] as BaseItemDto[]
  );
  const [itemsLatestTv, setItemsLatestTv] = useState([] as BaseItemDto[]);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <Pressable
          style={{
            backgroundColor: '#007AFF',
            height: '70%',
            marginRight: 10,
            aspectRatio: 1,
            borderRadius: 100,
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('User Settings')}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#fff'
            }}
          >
            {api.userInfo.user?.name?.charAt(0).toUpperCase()}
          </Text>
        </Pressable>
      )
    });

    // Get Libraries
    api.UserViewsApi.getUserViews({
      userId: api.userInfo.user?.id || ''
    }).then((result) => {
      // Only TV Shows and movies are currently supported
      const filteredResults = result?.items?.filter((item) => {
        return (
          item.collectionType === 'movies' || item.collectionType === 'tvshows'
        );
      });

      if (filteredResults) {
        setLibraries(filteredResults);
        setLoaded(true);
      }
    });

    // Get Movies to Resume
    api.ItemsApi.getResumeItems({
      userId: api.userInfo.user?.id || '',
      includeItemTypes: 'movie'
    }).then((res) => {
      if (res.items) {
        setItemsResume([...itemsResume, ...res.items]);
      }
    });

    // Get TV Shows to Resume OR to Continue
    api.TvShowsApi.getNextUp({
      userId: api.userInfo.user?.id || ''
    }).then((res) => {
      if (res.items) {
        setItemsNextUp([...res.items]);
      }
    });

    // Get Latest Movies
    api.UserLibraryApi.getLatestMedia({
      userId: api.userInfo.user?.id || '',
      includeItemTypes: 'movie'
    }).then((result) => {
      if (result) {
        setItemsLatestMovies(result);
      }
    });

    // Get Latest TV Shows
    api.UserLibraryApi.getLatestMedia({
      userId: api.userInfo.user?.id || '',
      includeItemTypes: 'series'
    }).then((result) => {
      if (result) {
        setItemsLatestTv(result);
      }
    });
  }, []);

  const goToLibraries = (
    libraryId: string | undefined,
    libraryName: string | undefined,
    libraryType: string | undefined
  ) => {
    if (libraryId) {
      navigation.navigate('Library', {
        libraryId: libraryId,
        libraryName: libraryName || '',
        libraryType: libraryType || ''
      });
    } else {
      console.error('Missing library Id');
    }
  };

  const libraryActionSheet = async (libraryId: string) => {
    const options = ['Cancel'];

    if (api.userInfo.user?.policy?.isAdministrator) {
      options.push('Scan Library');
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: options,
          cancelButtonIndex: 0
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            try {
              await api.ItemRefreshApi.post({
                itemId: libraryId,
                replaceAllImages: false,
                replaceAllMetadata: false
              });
            } catch (error) {
              console.error(error);
            }
          }
        }
      );
    } else {
      return;
    }
  };

  const getIconType = (collectionType: string) => {
    switch (collectionType) {
      case 'tvshows':
        return 'ios-tv';
      case 'movies':
        return 'ios-film';
      default:
        return '';
    }
  };

  const renderLibraryLink = ({ item }: { item: BaseItemDto }) => {
    return (
      <Pressable
        onPress={() =>
          goToLibraries(item.id, item.name || '', item.collectionType || '')
        }
        onLongPress={() => libraryActionSheet(item.id || '')}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          paddingHorizontal: 15,
          marginHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#007AFF'
        }}
      >
        <Ionicons
          name={getIconType(item.collectionType || '')}
          size={28}
          color="white"
        />
        <Text
          style={{
            textAlignVertical: 'center',
            fontSize: 18,
            color: '#fff',
            marginLeft: 10
          }}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };

  if (!loaded) {
    return <LoadingComponent />;
  } else if (!libraries.length) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>{t('noLibrariesFound')}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        height: '100%',
        flex: 1
      }}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={libraries}
        renderItem={renderLibraryLink}
        contentContainerStyle={{
          justifyContent: 'space-around'
        }}
        style={{
          marginTop: 10
        }}
      />

      <HomeSection
        sectionType="resumeItems"
        data={[...itemsNextUp, ...itemsResume]}
      />
      <HomeSection sectionType="latestMovies" data={itemsLatestMovies} />
      <HomeSection sectionType="latestTv" data={itemsLatestTv} />
    </ScrollView>
  );
}
