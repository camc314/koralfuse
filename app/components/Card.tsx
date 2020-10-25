import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { BaseItemDto } from '../services/fetch-api';
import { getImageUrl } from '../services/api';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  item: BaseItemDto;
};

export default function Card({ item }: Props): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Item', { itemId: item.id || '' });
  };

  return (
    <View
      style={{
        padding: 5,
        marginBottom: 5,
        flexGrow: 2,
        maxWidth: 150,
        maxHeight: 250
      }}
    >
      <Pressable
        onPress={onPress}
        style={[
          {
            shadowRadius: 8,
            shadowOffset: {
              height: 2,
              width: 0
            },
            shadowOpacity: 0.3,
            borderRadius: 10,
            aspectRatio: 0.6666666666,
            minHeight: 100
          },
          theme.dark ? { shadowColor: '#aaa' } : {}
        ]}
      >
        {item.imageTags?.primary ? (
          <Image
            style={{
              height: '100%',
              backgroundColor: '#848484',
              borderRadius: 10
            }}
            source={{
              uri: getImageUrl(item.id || '', 'Primary')
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
            <FontAwesome
              name="tv"
              color={theme.dark ? '#333' : '#ccc'}
              size={45}
            />
          </View>
        )}
      </Pressable>
      <Text
        style={{
          alignSelf: 'center',
          width: 100,
          textAlign: 'center',
          marginTop: 4,
          minHeight: 80,
          margin: 'auto',
          color: theme.colors.text
        }}
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </View>
  );
}
