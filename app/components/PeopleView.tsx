import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  View,
  FlatList,
  Text,
  Image,
  Button,
  Pressable
} from 'react-native';
import { api, getImageUrl } from '../services/api';
import { BaseItemPerson, ItemFields } from '../services/fetch-api';

type Props = {
  itemId: string;
};

export default function PeopleView({ itemId }: Props): JSX.Element {
  const [people, setPeople] = useState([] as BaseItemPerson[]);
  const deviceWidth = Dimensions.get('window').width;
  const { colors, dark } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    api.ItemsApi.getItems({
      uId: api.userInfo.user?.id || '',
      userId: api.userInfo.user?.id,
      ids: itemId || '',
      fields: [ItemFields.People]
    }).then((result) => {
      if (result.items && result.items[0].people) {
        setPeople(result.items[0].people);
      }
    });
  }, []);

  const renderItem = ({ item }: { item: BaseItemPerson }) => {
    console.log(item);
    return (
      <Pressable
        onPress={() => navigation.push('People', { personId: item.id || '' })}
        style={{
          marginHorizontal: 10,
          marginTop: 15
        }}
      >
        <View
          style={{
            aspectRatio: 2 / 3,
            height: 200,
            borderRadius: 10,
            shadowRadius: 8,
            shadowOffset: {
              height: 2,
              width: 0
            },
            shadowOpacity: 0.3,
            marginBottom: 5
          }}
        >
          {item.primaryImageTag ? (
            <Image
              source={{
                uri: getImageUrl(item.id || '', 'Primary')
              }}
              style={{
                flex: 1,
                borderRadius: 10
              }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#848484',
                borderRadius: 10
              }}
            >
              <Ionicons name="md-person" size={45} color="#fff" />
            </View>
          )}
        </View>
        <Text
          style={{
            color: colors.text,
            fontSize: 14,
            textAlign: 'center',
            maxWidth: (200 * 2) / 3
          }}
        >
          {item.name}
        </Text>
        <Text
          style={[
            {
              fontWeight: '400',
              textAlign: 'center',
              maxWidth: (200 * 2) / 3
            },
            dark ? { color: '#aaa' } : { color: '#333' }
          ]}
        >
          {item.role}
        </Text>
      </Pressable>
    );
  };

  if (!people) {
    return <View />;
  }

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={[
            {
              fontSize: 26,
              marginLeft: 50,
              marginTop: 30,
              marginBottom: 5,
              fontWeight: '600',
              color: colors.text
            },
            deviceWidth < 600 ? { marginLeft: 25 } : {}
          ]}
        >
          {t('castCrew')}
        </Text>
        <View
          style={[
            {
              marginLeft: 'auto',
              marginRight: 50,
              marginTop: 25,
              marginBottom: 5,
              display: 'none'
            },
            deviceWidth < 600 ? { marginRight: 25 } : {}
          ]}
        >
          <Button title={t('viewAll')} onPress={() => 0} />
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={people}
        renderItem={renderItem}
        ListHeaderComponent={
          <View
            style={[
              { width: 0, marginLeft: 40 },
              deviceWidth < 600 ? { marginLeft: 15 } : {}
            ]}
          />
        }
      />
    </View>
  );
}
