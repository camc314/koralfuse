import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, Image, ScrollView } from 'react-native';
import { api, getImageUrl } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';
import PersonItems from '../../components/PersonItems';
import { useTranslation } from 'react-i18next';
import { LoadingComponent } from '../../components/LoadingComponent';

type Props = StackScreenProps<RootStackParamList, 'People'>;

type emptySectionProps = 'personTv' | 'personMovies' | 'personEpisodes';

export default function ItemView({ route, navigation }: Props): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [person, setPerson] = useState({} as BaseItemDto);
  const [emptySection, setEmptySection] = useState({
    personTv: false,
    personMovies: false,
    personEpisodes: false
  });
  const { t } = useTranslation();
  const deviceWidth = Dimensions.get('window').width;

  const { colors } = useTheme();

  useEffect(() => {
    api.ItemsApi.getItems({
      uId: api?.userInfo?.user?.id || '',
      userId: api?.userInfo?.user?.id || '',
      ids: route.params.personId,
      fields: 'overview'
    }).then((res) => {
      if (res.items) {
        setPerson(res.items[0]);
        navigation.setOptions({ title: res.items[0].name || '' });
      }
      setLoaded(true);
    });
  }, []);

  const emptySectionCallback = (type: emptySectionProps) => {
    setEmptySection({ ...emptySection, [type]: true });
  };

  if (!loaded) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView>
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
        {person.name}
      </Text>
      {person.id && person.imageTags && person.overview ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10
          }}
        >
          <View
            style={{
              aspectRatio: 2 / 3,
              height: 150
            }}
          >
            <Image
              style={{
                flex: 1,
                borderRadius: 10
              }}
              source={{
                uri: getImageUrl(person.id, 'Primary')
              }}
            />
          </View>
          <Text
            style={{
              maxHeight: 150,
              marginLeft: 10,
              maxWidth: deviceWidth - 100 - 30,
              color: colors.text
            }}
          >
            {person.overview}
          </Text>
        </View>
      ) : (
        <View />
      )}
      {!emptySection.personMovies &&
      !emptySection.personTv &&
      !emptySection.personEpisodes ? (
        <>
          <PersonItems
            sectionType="personTv"
            itemId={route.params.personId}
            emptySectionCallback={() => emptySectionCallback('personTv')}
          />
          <PersonItems
            sectionType="personMovies"
            itemId={route.params.personId}
            emptySectionCallback={() => emptySectionCallback('personMovies')}
          />
          <PersonItems
            sectionType="personEpisodes"
            itemId={route.params.personId}
            emptySectionCallback={() => emptySectionCallback('personEpisodes')}
          />
        </>
      ) : (
        <View>
          <Text>{t('personDoesNotStar')}</Text>
        </View>
      )}
      <View
        style={{
          height: 50,
          width: '100%'
        }}
      />
    </ScrollView>
  );
}
