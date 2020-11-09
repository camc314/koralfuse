import React, { useEffect, useState } from 'react';
import {
  ActionSheetIOS,
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  Text,
  View
} from 'react-native';
import { BaseItemDto } from '../services/fetch-api';
import { api, getImageUrl, imageType } from '../services/api';
import { useTheme, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/home';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';

type sectionType =
  | 'resumeItems'
  | 'latestMovies'
  | 'latestTv'
  | 'relatedItems'
  | 'personTv'
  | 'personMovies';

type Props = {
  data: BaseItemDto[];
  sectionType: sectionType;
};

type HomeSectionNavigationProps = StackNavigationProp<RootStackParamList>;

export default function HomeSection({ data, sectionType }: Props): JSX.Element {
  const { colors, dark } = useTheme();
  const { t } = useTranslation();
  const [sectionData, setSectionData] = useState([] as BaseItemDto[]);
  const deviceWidth = Dimensions.get('window').width;
  const navigation = useNavigation<HomeSectionNavigationProps>();
  let sectionTitle = '';

  useEffect(() => {
    setSectionData(data);
  }, [data]);

  switch (sectionType) {
    case 'resumeItems':
      sectionTitle = t('continueWatching');
      break;
    case 'latestMovies':
      sectionTitle = t('latestMovies');
      break;
    case 'latestTv':
      sectionTitle = t('latestTv');
      break;
    case 'relatedItems':
      sectionTitle = t('moreLikeThis');
      break;
    case 'personTv':
      sectionTitle = t('shows');
      break;
    case 'personMovies':
      sectionTitle = t('movies');
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

    const handleNavigation = () => {
      if (sectionType === 'resumeItems') {
        navigation.navigate('Play', { itemId: item.id || '' });
      } else {
        navigation.push('Item', { itemId: item.id || '' });
      }
    };

    const handleLongPress = () => {
      if (sectionType === 'resumeItems') {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: [
              'Cancel',
              'Play',
              'Play from beginning',
              'Mark as Played'
            ],
            cancelButtonIndex: 0
          },
          (buttonIndex) => {
            switch (buttonIndex) {
              case 1:
                navigation.navigate('Play', { itemId: item.id || '' });
                break;
              case 2:
                navigation.navigate('Play', {
                  itemId: item.id || '',
                  playFromStart: true
                });
                break;
              case 3: {
                api.PlaystateApi.markPlayedItem({
                  userId: api.userInfo.user?.id || '',
                  itemId: item.id || ''
                });
                setSectionData(
                  sectionData.filter((dataItem) => dataItem.id !== item.id)
                );
                break;
              }
            }
          }
        );
      }
    };

    const itemHeight =
      sectionType === 'resumeItems'
        ? deviceWidth < 500
          ? (deviceWidth * 0.8 * 9) / 16
          : 225
        : 200;

    if (!sectionData) {
      return <View />;
    }

    return (
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 15
        }}
      >
        <Pressable
          onPress={handleNavigation}
          onLongPress={handleLongPress}
          style={[
            {
              minWidth: 100,
              height: itemHeight,
              aspectRatio: aspectRatio,
              shadowRadius: 8,
              shadowOffset: {
                height: 2,
                width: 0
              },
              shadowOpacity: 0.3,
              borderRadius: 10
            }
          ]}
        >
          {item.imageTags?.primary ? (
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
              <FontAwesome name="tv" color={dark ? '#333' : '#ccc'} size={45} />
            </View>
          )}
          {sectionType === 'resumeItems' &&
          item.userData?.playedPercentage &&
          item.userData.playbackPositionTicks &&
          item.runTimeTicks ? (
            <LinearGradient
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRadius: 10
              }}
              colors={['transparent', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
            >
              <Text
                style={{
                  color: '#fffd',
                  alignSelf: 'flex-start',
                  marginLeft: '2%',
                  marginBottom: 2,
                  fontSize: 16
                }}
              >
                {`${Math.floor(
                  (item.runTimeTicks - item.userData.playbackPositionTicks) /
                    10000 /
                    1000 /
                    60
                )} min`}
              </Text>
              <View
                style={{
                  marginBottom: '2%',
                  width: '96%',
                  borderRadius: 10,
                  height: 2,
                  backgroundColor: '#fff5'
                }}
              >
                <View
                  style={{
                    width: `${item.userData?.playedPercentage}%`,
                    height: '100%',
                    borderRadius: 10,
                    backgroundColor: '#007AFF'
                  }}
                />
              </View>
            </LinearGradient>
          ) : (
            <View />
          )}
        </Pressable>
        <Text
          style={[
            {
              marginTop: 5,
              fontSize: 16,
              color: colors.text
            },
            sectionType !== 'resumeItems'
              ? { maxWidth: (200 * 2) / 3, textAlign: 'center' }
              : { maxWidth: (itemHeight * 16) / 9 }
          ]}
          numberOfLines={sectionType !== 'resumeItems' ? 2 : 1}
        >
          {cardTitle}
        </Text>
        <Text
          style={[
            {
              marginTop: 5,
              fontSize: 14,
              color: '#333',
              fontWeight: '400'
            },
            dark ? { color: '#aaa' } : {}
          ]}
        >
          {cardSubtitle}
        </Text>
      </View>
    );
  };

  if (!data.length) {
    return <View />;
  }

  return (
    <View>
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
        {sectionTitle}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={sectionData}
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
