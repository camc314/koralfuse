import React, { createRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import { api } from '../../services/api';
import { IOSPlaybackProfile } from '../../services/playback-profiles/playbackProfile';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';

type Props = StackScreenProps<RootStackParamList, 'Play'>;

export default function VideoPlayer({ route }: Props): JSX.Element {
  const [streamUrl, setStreamUrl] = useState('');
  const player = createRef<Video>();

  const getVideoUrl = () => {
    // TODO Generate the playback profile for IOS/Android properly
    // To increase compatibility and improve playback
    api.MediaInfoApi.getPostedPlaybackInfo({
      userId: api.userInfo.user?.id,
      itemId: route.params.itemId,
      deviceProfileDto: IOSPlaybackProfile
    }).then((res) => {
      // If direct Play is supported
      if (
        res?.mediaSources &&
        res?.mediaSources[0] &&
        res?.mediaSources[0].supportsDirectStream
      ) {
        const directOptions = {
          static: 'true',
          mediaSourceId: res?.mediaSources[0].id || '',
          deviceId: api.userInfo.sessionInfo?.deviceId || '',
          api_key: api.userInfo.accessToken || '',
          liveStreamId: ''
        };

        if (res?.mediaSources[0].liveStreamId) {
          directOptions.liveStreamId = res?.mediaSources[0].liveStreamId;
        }

        const params = new URLSearchParams(directOptions);
        const source = `${api.baseUrl}/Videos/${
          res?.mediaSources[0].id
        }/stream.${res?.mediaSources[0].container}?${params.toString()}`;

        setStreamUrl(source);
      } else if (res?.mediaSources && res?.mediaSources[0]) {
        // If transcoding is required
        const source = `${api.baseUrl}${res?.mediaSources[0].transcodingUrl}`;

        setStreamUrl(source);
      }
      return;
    });
  };

  useEffect(() => {
    getVideoUrl();
  }, []);

  const goFullScreen = () => {
    player.current?.presentFullscreenPlayer();
  };

  return (
    <View>
      <Video
        ref={player}
        source={{
          uri: streamUrl
        }}
        rate={1.0}
        volume={1.0}
        useNativeControls={true}
        resizeMode="contain"
        shouldPlay
        isLooping
        onReadyForDisplay={goFullScreen}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}
