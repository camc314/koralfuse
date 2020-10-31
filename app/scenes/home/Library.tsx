import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { api } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';
import Card from '../../components/Card';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';

type Props = StackScreenProps<RootStackParamList, 'Library'>;

export default function LibraryView({ route, navigation }: Props): JSX.Element {
  const [libraryItem, setLibraryItems] = useState([] as BaseItemDto[]);
  const [refreshing, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: route.params.libraryName });
    getItems();
  }, []);

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
        setLibraryItems(results.items);
        setRefresh(false);
      }
      if (loading) {
        setLoading(false);
      }
    });
  };

  const renderEmptyContainer = () => {
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
          There&apos;s nothing here...
        </Text>
        <Text style={{ color: theme.colors.text, marginTop: 20 }}>
          Add items to the library in the admin dashboard
        </Text>
      </View>
    );
  };

  const footerComponent = () => {
    if (libraryItem[0]) {
      let totalRunTime = 0;
      let runTimeText = '';

      if (libraryItem[0].type === 'Movie') {
        for (const item of libraryItem) {
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
            {libraryItem.length} Items{runTimeText ? `, ${runTimeText}` : ''}
          </Text>
        </View>
      );
    } else {
      return <View />;
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={libraryItem}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={false}
        removeClippedSubviews={true}
        style={{
          marginLeft: (deviceWidth % 150) / 2,
          width: '100%',
          height: '100%'
        }}
        numColumns={Math.floor(deviceWidth / 150)}
        ListEmptyComponent={renderEmptyContainer()}
        refreshing={refreshing}
        onRefresh={getItems}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
}
