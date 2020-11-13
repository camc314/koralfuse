import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View, Text, TextInput } from 'react-native';
import { api } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';
import Card from '../../components/Card';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';
import { LoadingComponent } from '../../components/LoadingComponent';
import { useTranslation } from 'react-i18next';

type Props = StackScreenProps<RootStackParamList, 'Library'>;

export default function LibraryView({ route, navigation }: Props): JSX.Element {
  const { t } = useTranslation();
  const [unfilteredLibrary, setUnfilteredLibrary] = useState(
    [] as BaseItemDto[]
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLibrary, setFilteredLibrary] = useState([] as BaseItemDto[]);
  const [refreshing, setRefresh] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: route.params.libraryName });
    getItems();
  }, []);

  useEffect(() => {
    searchFilterFunction();
  }, [searchQuery]);

  const getItems = () => {
    setRefresh(true);

    const options = {
      uId: api.userInfo?.user?.id || '',
      userId: api.userInfo?.user?.id,
      parentId: route.params.libraryId,
      sortBy: 'sortName',
      includeItemTypes: ''
    };

    switch (route.params.libraryType) {
      case 'movies':
        options.includeItemTypes = 'movie';
        break;
      case 'tvshows':
        options.includeItemTypes = 'series';
        break;
    }

    api.ItemsApi.getItems(options).then((results) => {
      if (results.items) {
        setUnfilteredLibrary(results.items);
        setFilteredLibrary(results.items);
        setRefresh(false);
      }
      if (!loaded) {
        setLoaded(true);
      }
    });
  };

  const renderEmptyContainer = () => {
    if (unfilteredLibrary.length) {
      return (
        <View
          style={{
            flex: 1,
            height: deviceHeight * 0.8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 30, color: theme.colors.text }}>
            {t('noResultFound')}
          </Text>
          <Text style={{ color: theme.colors.text, marginTop: 20 }}>
            {t('trySomethingElse')}
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            height: deviceHeight * 0.8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 30, color: theme.colors.text }}>
            {t('emptyLibrary')}
          </Text>
          <Text style={{ color: theme.colors.text, marginTop: 20 }}>
            {t('addItemsAdmin')}
          </Text>
        </View>
      );
    }
  };

  const footerComponent = () => {
    if (filteredLibrary.length !== unfilteredLibrary.length) {
      return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 20 }}>
          <Text style={{ color: theme.colors.text }}>
            {filteredLibrary.length} Items
          </Text>
        </View>
      );
    }

    if (unfilteredLibrary[0]) {
      let totalRunTime = 0;
      let runTimeText = '';

      if (unfilteredLibrary[0].type === 'Movie') {
        for (const item of unfilteredLibrary) {
          totalRunTime += item.runTimeTicks || 0;
        }

        const totalRunTimeMin = totalRunTime / 10000 / 1000 / 60;
        runTimeText = `${Math.floor(totalRunTimeMin / 60)} hrs ${Math.floor(
          totalRunTimeMin % 60
        )} min`;
      }
      return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 20 }}>
          <Text style={{ color: theme.colors.text }}>
            {unfilteredLibrary.length} Items
            {runTimeText ? `, ${runTimeText}` : ''}
          </Text>
        </View>
      );
    } else {
      return <View />;
    }
  };

  const ListHeader = () => {
    if (!unfilteredLibrary.length) {
      return <View />;
    }

    return (
      <>
        <TextInput
          placeholder={
            route.params.libraryType === 'movies'
              ? t('searchMovies')
              : t('searchShows')
          }
          style={[
            {
              height: 40,
              padding: 10,
              borderRadius: 10,
              margin: 10,
              color: theme.colors.text
            },
            !theme.dark
              ? { backgroundColor: '#ddd' }
              : { backgroundColor: '#4c4c4c' }
          ]}
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="always"
        />
      </>
    );
  };

  const searchFilterFunction = () => {
    const newData = unfilteredLibrary.filter((item) => {
      const itemData = `${item.name?.toLowerCase()}`;
      return itemData.indexOf(searchQuery.toLowerCase()) > -1;
    });
    setFilteredLibrary(newData);
  };

  if (!loaded) {
    return <LoadingComponent />;
  }

  return (
    <View>
      <FlatList
        data={filteredLibrary}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={false}
        removeClippedSubviews={true}
        style={{
          // marginLeft: (deviceWidth % 150) / 2,
          width: '100%',
          height: '100%'
        }}
        numColumns={
          deviceWidth < 700
            ? Math.floor(deviceWidth / 120)
            : Math.floor(deviceWidth / 150)
        }
        ListEmptyComponent={renderEmptyContainer()}
        refreshing={refreshing}
        onRefresh={getItems}
        ListHeaderComponent={ListHeader()}
        ListFooterComponent={footerComponent}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 5
        }}
      />
    </View>
  );
}
