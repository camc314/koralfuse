import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import { api, getImageUrl } from '../../services/api';
import { AuthenticationResult, BaseItemDto } from '../../services/fetch-api';
import AsyncStorage from '@react-native-community/async-storage';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonComponent from '../../components/button';
import ScalableImage from 'react-native-scalable-image';
import SeasonView from '../../components/SeasonView';

type Props = StackScreenProps<RootStackParamList, 'Item'>;

export default function ItemView({ route, navigation }: Props): JSX.Element {
  const [item, setItem] = useState({} as BaseItemDto);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const { colors } = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then((userInfo) => {
      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo) as AuthenticationResult;
        api.ItemsApi.getItems({
          uId: userInfoParsed?.user?.id || '',
          userId: userInfoParsed?.user?.id,
          ids: route.params.itemId,
          fields: 'overview,genres'
        }).then((results) => {
          if (results.items) {
            setItem(results.items[0]);
            getSubtitle(results.items[0]);
            navigation.setOptions({ title: results.items[0].name || '' });
          }
        });
      }
    });
  }, []);

  const ticksToTime = (ticks: number): string => {
    const ms = ticks / 600000000;
    if (Math.floor(ms / 60)) {
      if (Math.floor(ms / 60) > 1) {
        return `${Math.floor(ms / 60)} hrs ${Math.floor(ms % 60)} min`;
      } else {
        return `${Math.floor(ms / 60)} hr ${Math.floor(ms % 60)} min`;
      }
    } else {
      return `${Math.floor(ms % 60)} min`;
    }
  };

  const getSubtitle = (item: BaseItemDto) => {
    const response = [];

    if (item.genres) {
      response.push(item.genres[0]);
    }

    if (item.type === 'Movie') {
      response.push(item.productionYear);
    } else if (item.type === 'Series') {
      if (item.status === 'Ended') {
        response.push(
          `${item.productionYear} - ${item?.endDate?.getFullYear()}`
        );
      } else {
        response.push(`${item.productionYear} - Present`);
      }
    }

    if (item.type === 'Movie' && item.runTimeTicks) {
      response.push(ticksToTime(item.runTimeTicks));
    }

    return response.join(' • ');
  };

  return (
    <ScrollView>
      <View>
        {deviceWidth > 500 ? (
          <View
            style={{
              aspectRatio: 16 / 9,
              width: '100%'
            }}
          >
            <ImageBackground
              style={{
                height: '100%',
                flex: 1,
                borderRadius: 20,
                justifyContent: 'flex-end'
              }}
              source={{
                uri: getImageUrl(item.id || '', 'Backdrop', 1500)
              }}
            >
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    paddingHorizontal: 40
                  }}
                >
                  {item.imageTags?.logo ? (
                    <View>
                      <ScalableImage
                        width={deviceWidth * 0.45}
                        height={deviceHeight * 0.2}
                        source={{
                          uri: getImageUrl(item.id || '', 'Logo', 800)
                        }}
                      />
                      <Text
                        style={{
                          color: '#fff',
                          marginBottom: 30,
                          marginTop: 20
                        }}
                      >
                        {getSubtitle(item)}
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Text
                        style={{
                          fontSize: 60,
                          color: 'white',
                          marginBottom: 10
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text style={{ color: '#fff', marginBottom: 30 }}>
                        {getSubtitle(item)}
                      </Text>
                    </View>
                  )}
                  <View
                    style={{
                      width: 300,
                      marginBottom: 30
                    }}
                  >
                    <ButtonComponent
                      marginHorizontal={10}
                      text="Play"
                      onPress={() =>
                        navigation.navigate('Play', { itemId: item.id || '' })
                      }
                    />
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              width: deviceWidth
            }}
          >
            <View
              style={{
                marginTop: 15,
                aspectRatio: 0.666,
                height: deviceHeight * 0.4
              }}
            >
              <Image
                style={{
                  flex: 1,
                  borderRadius: 10
                }}
                source={{
                  uri: getImageUrl(item.id || '', 'Primary', 600)
                }}
              />
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                padding: 10
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: colors.text,
                  marginHorizontal: 10
                }}
              >
                {item.name}
              </Text>
              <ButtonComponent
                marginHorizontal={10}
                text="Play"
                onPress={() =>
                  navigation.navigate('Play', { itemId: item.id || '' })
                }
              ></ButtonComponent>
            </View>
          </View>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: colors.text,
            marginHorizontal: 10,
            height: 200
          }}
        >
          {item.overview}
        </Text>
      </View>
      {item.type === 'Series' ? (
        <SeasonView
          itemId={item.id || ''}
          colors={colors}
          navigation={navigation}
        />
      ) : (
        <View></View>
      )}
    </ScrollView>
  );
}
