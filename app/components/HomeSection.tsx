import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  View
} from 'react-native';
import { BaseItemDto } from '../services/fetch-api';
import { getImageUrl, imageType } from '../services/api';

type sectionType = 'resumeItems' | 'latestMovies' | 'latestTv';

type Props = {
  data: BaseItemDto[];
  sectionType: sectionType;
};

export default function HomeSection({ data, sectionType }: Props): JSX.Element {
  const deviceWidth = Dimensions.get('window').width;
  let sectionTitle = '';

  switch (sectionType) {
    case 'resumeItems':
      sectionTitle = 'Continue Watching';
      break;
    case 'latestMovies':
      sectionTitle = 'Latest Movies';
      break;
    case 'latestTv':
      sectionTitle = 'Latest TV';
      break;
  }

  const renderItem: ListRenderItem<BaseItemDto> = ({ item }) => {
    let cardTitle = '';
    let cardSubtitle = '';
    let aspectRatio = 1.77;

    let imageType = 'Backdrop' as imageType;

    if (sectionType === 'resumeItems') {
      if (item.type === 'Episode') {
        cardTitle = item.seriesName || '';
        imageType = 'Primary';
        if (item?.userData?.playedPercentage) {
          cardSubtitle = `RESUME S${item.parentIndexNumber} • E${item.indexNumber}`;
        } else {
          cardSubtitle = `NEXT S${item.parentIndexNumber} • E${item.indexNumber}`;
        }
      } else {
        cardTitle = item.name || '';
        cardSubtitle = 'CONTINUE';
      }
    } else {
      cardTitle = item.name || '';
      aspectRatio = 0.666;
      imageType = 'Primary';
    }

    return (
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 15
        }}
      >
        <View
          style={{
            minWidth: 100,
            height: 200,
            aspectRatio: aspectRatio,
            shadowRadius: 8,
            shadowOffset: {
              height: 2,
              width: 0
            },
            shadowOpacity: 0.3,
            borderRadius: 10
          }}
        >
          <Image
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#848484',
              borderRadius: 10,
              resizeMode: 'cover'
            }}
            source={{
              uri: getImageUrl(item.id || '', imageType)
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16
          }}
        >
          {cardTitle}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 14,
            color: '#333',
            fontWeight: '400'
          }}
        >
          {cardSubtitle}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Text
        style={[
          {
            fontSize: 26,
            marginLeft: 50,
            marginTop: 30,
            marginBottom: 5,
            fontWeight: '600'
          },
          deviceWidth < 600 ? { marginLeft: 25 } : {}
        ]}
      >
        {sectionTitle}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
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
