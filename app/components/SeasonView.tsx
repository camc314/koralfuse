import { Theme } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { api, getImageUrl } from '../services/api';
import { BaseItemDto } from '../services/fetch-api';
import ButtonComponent from './button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/home';

interface SeasonViewProps {
  itemId: string;
  colors: Theme['colors'];
  navigation: navigationProp['navigation'];
}

interface SeasonViewState {
  episodes: BaseItemDto[];
  currentSeasonNumber: number;
  selectedEpisode: BaseItemDto;
}

interface viewableItems {
  viewableItems: viewableItemsItem[];
}

interface viewableItemsItem {
  item: BaseItemDto;
}

interface RenderItemProps {
  item: BaseItemDto;
}

type navigationProp = StackScreenProps<RootStackParamList, 'Item'>;

export default class SeasonView extends Component<
  SeasonViewProps,
  SeasonViewState
> {
  constructor(props: SeasonViewProps) {
    super(props);
    this.state = {
      episodes: [],
      currentSeasonNumber: 1,
      selectedEpisode: {}
    };
  }

  async componentDidMount(): Promise<void> {
    const seasons = await api.ItemsApi.getItems({
      uId: api.userInfo.user?.id || '',
      userId: api.userInfo.user?.id || '',
      parentId: this.props.itemId
    });

    const allEpisodes = [];
    if (seasons.items) {
      for (const season of seasons.items) {
        const seasonEpisodes = await api.ItemsApi.getItems({
          uId: api.userInfo.user?.id || '',
          userId: api.userInfo.user?.id || '',
          parentId: season.id,
          fields: 'overview'
        });
        if (seasonEpisodes.items) {
          allEpisodes.push(...seasonEpisodes.items);
        }
      }
    }
    this.setState({ episodes: allEpisodes });
    this.setState({ selectedEpisode: allEpisodes[0] });
  }

  renderItem = ({ item }: RenderItemProps): JSX.Element => {
    return (
      <View style={{ margin: 10 }}>
        <Pressable onPress={() => this.setState({ selectedEpisode: item })}>
          <View style={{ aspectRatio: 16 / 9, height: 175 }}>
            <Image
              style={{ flex: 1, borderRadius: 10 }}
              source={{ uri: getImageUrl(item.id || '', 'Primary') }}
            />
          </View>
          <Text
            style={[
              { color: this.props.colors.text, marginVertical: 10 },
              item.id === this.state.selectedEpisode.id
                ? { fontWeight: '500' }
                : {}
            ]}
          >{`Episode ${item.indexNumber}`}</Text>
          <Text
            style={[
              { color: this.props.colors.text, fontSize: 16 },
              item.id === this.state.selectedEpisode.id
                ? { fontWeight: '500' }
                : {}
            ]}
          >
            {item.name}
          </Text>
        </Pressable>
      </View>
    );
  };

  headerFooterComponent = (): JSX.Element => {
    const deviceWidth = Dimensions.get('window').width;

    return (
      <View
        style={[
          { width: 0, marginLeft: 40 },
          deviceWidth < 600 ? { marginLeft: 15 } : {}
        ]}
      />
    );
  };

  updateSeasonNumber = (viewableItems: viewableItems): void => {
    if (
      viewableItems.viewableItems[1] &&
      viewableItems.viewableItems[1].item.parentIndexNumber &&
      viewableItems.viewableItems[1].item.parentIndexNumber !==
        this.state.currentSeasonNumber
    ) {
      this.setState({
        currentSeasonNumber:
          viewableItems.viewableItems[1].item.parentIndexNumber
      });
    }
  };

  render(): JSX.Element {
    const deviceWidth = Dimensions.get('window').width;
    return (
      <View>
        <View
          style={{
            borderTopColor: '#888',
            borderTopWidth: 1,
            paddingTop: 20,
            marginHorizontal: 20
          }}
        />
        <Text
          style={[
            { color: this.props.colors.text, fontSize: 20 },
            { marginLeft: 50 },
            deviceWidth < 600 ? { marginLeft: 15 } : {}
          ]}
        >{`Season ${this.state.currentSeasonNumber}`}</Text>
        <FlatList
          data={this.state.episodes}
          renderItem={this.renderItem}
          horizontal
          ListHeaderComponent={this.headerFooterComponent}
          ListFooterComponent={this.headerFooterComponent}
          onViewableItemsChanged={this.updateSeasonNumber}
        />
        <View
          style={{
            flexDirection: 'row',
            padding: 20
          }}
        >
          {deviceWidth > 500 ? (
            <View
              style={{
                aspectRatio: 16 / 9,
                width: '30%'
              }}
            >
              <Image
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: getImageUrl(
                    this.state.selectedEpisode.id || '',
                    'Primary'
                  )
                }}
              />
            </View>
          ) : (
            <View />
          )}
          {this.state.selectedEpisode ? (
            <View
              style={[
                { marginLeft: 20, width: '70%' },
                deviceWidth < 500 ? { width: 'auto', marginLeft: 0 } : {}
              ]}
            >
              <Text
                style={{
                  color: this.props.colors.text,
                  fontSize: 20,
                  fontWeight: '500'
                }}
              >
                {this.state.selectedEpisode.name}
              </Text>
              <Text
                style={{ color: this.props.colors.text, fontWeight: '300' }}
              >{`Season ${
                this.state.selectedEpisode.parentIndexNumber
              } Episode ${this.state.selectedEpisode.indexNumber}${
                this.state.selectedEpisode.officialRating
                  ? ` • ${this.state.selectedEpisode.officialRating}`
                  : ''
              }`}</Text>
              <Text
                style={{
                  color: this.props.colors.text,
                  maxWidth: '100%',
                  marginTop: 10,
                  marginBottom: 20
                }}
              >
                {this.state.selectedEpisode.overview}
              </Text>
              <ButtonComponent
                text={`Play Episode ${this.state.selectedEpisode.indexNumber}`}
                onPress={() =>
                  this.props.navigation.navigate('Play', {
                    itemId: this.state.selectedEpisode.id || ''
                  })
                }
                marginHorizontal={0}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
