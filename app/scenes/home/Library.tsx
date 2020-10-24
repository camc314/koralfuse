import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View, Text } from 'react-native';
import { api } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';
import { card } from '../../components/Card';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';

type Props = StackScreenProps<RootStackParamList, 'Library'>;

export default function LibraryView({ route, navigation }: Props): JSX.Element {
  const [libraryItem, setLibraryItems] = useState([] as BaseItemDto[]);
  const [refreshing, setRefresh] = useState(false);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: route.params.libraryName });
    getItems();
  }, []);

  const getItems = () => {
    setRefresh(true);
    api.ItemsApi.getItems({
      uId: api.userInfo?.user?.id || '',
      userId: api.userInfo?.user?.id,
      parentId: route.params.libraryId,
      sortBy: 'sortName'
    }).then((results) => {
      if (results.items) {
        setLibraryItems(results.items);
        setRefresh(false);
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

  return (
    <View>
      <FlatList
        data={libraryItem}
        renderItem={(item) => card(item, theme, navigation)}
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
      />
    </View>
  );
}
