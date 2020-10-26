import React, { createRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AVPlaybackStatus, Video } from 'expo-av';
import { api } from '../../services/api';
import { IOSPlaybackProfile } from '../../services/playback-profiles/playbackProfile';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/home';
import { BaseItemDto, PlaybackInfoResponse } from '../../services/fetch-api';

type Props = StackScreenProps<RootStackParamList, 'Play'>;

export default function VideoPlayer({ route }: Props): JSX.Element {
  const [streamUrl, setStreamUrl] = useState('');
  const [itemInfo, setItemInfo] = useState({} as BaseItemDto);
  const [playbackInfo, setPlaybackInfo] = useState({} as PlaybackInfoResponse);
  const [playbackStatus, setPlaybackStatus] = useState({} as AVPlaybackStatus);
  const player = createRef<Video>();

  const getVideoUrl = () => {
    // TODO Generate the playback profile for IOS/Android properly
    // To increase compatibility and improve playback
    api.MediaInfoApi.getPostedPlaybackInfo({
      userId: api.userInfo.user?.id,
      itemId: route.params.itemId,
      deviceProfileDto: IOSPlaybackProfile
    }).then((res) => {
      setPlaybackInfo(res);
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

  const getItemInfo = () => {
    api.ItemsApi.getItems({
      uId: api.userInfo.user?.id || '',
      userId: api.userInfo.user?.id,
      ids: route.params.itemId
    }).then((result) => {
      if (result.items) {
        setItemInfo(result.items[0]);
      }
    });
  };

  useEffect(() => {
    getItemInfo();
    getVideoUrl();
    return function () {
      if (playbackStatus.isLoaded) {
        api.PlaystateApi.onPlaybackStopped({
          userId: api.userInfo.user?.id || '',
          itemId: route.params.itemId,
          playSessionId: playbackInfo.playSessionId,
          positionTicks: playbackStatus?.positionMillis * 10000
        });
      }
    };
  }, []);

  const goFullScreen = () => {
    player.current?.presentFullscreenPlayer();
  };

  const reportBeginPlayback = (playbackReport: AVPlaybackStatus) => {
    if (playbackReport.isLoaded) {
      if (itemInfo.userData?.playbackPositionTicks) {
        console.log('Resuming!');
        player.current?.playFromPositionAsync(
          itemInfo.userData?.playbackPositionTicks / 10000
        );
      }
      api.PlaystateApi.reportPlaybackStart({
        playbackStartInfo: {
          itemId: route.params.itemId,
          playSessionId: playbackInfo.playSessionId,
          playbackStartTimeTicks:
            (itemInfo?.userData?.playbackPositionTicks || 0) / 10000
        }
      });
    }
  };

  const reportPlaybackStatus = (playbackReport: AVPlaybackStatus) => {
    // TODO Don't report playback when there is only a time update
    if (playbackReport.isLoaded) {
      setPlaybackStatus(playbackReport);
      if (playbackReport.isPlaying === false) {
        api.PlaystateApi.reportPlaybackProgress({
          playbackProgressInfo: {
            itemId: route.params.itemId,
            isPaused: true,
            positionTicks: playbackReport.positionMillis * 10000,
            playSessionId: playbackInfo.playSessionId
          }
        });
      } else {
        api.PlaystateApi.reportPlaybackProgress({
          playbackProgressInfo: {
            itemId: route.params.itemId,
            positionTicks: playbackReport.positionMillis * 10000
          }
        });
      }
    }
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
        onPlaybackStatusUpdate={reportPlaybackStatus}
        onLoad={reportBeginPlayback}
      />
    </View>
  );
}
