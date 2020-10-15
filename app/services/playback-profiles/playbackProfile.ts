import {
  CodecType,
  DlnaProfileType,
  EncodingContext,
  ProfileConditionType,
  ProfileConditionValue,
  SubtitleDeliveryMethod
} from '../fetch-api';

// INFO This needs to be looked at more closley
// This playback profile is generated based on jf-web running on an ipad pro
// At this point in time, I do not have an iPhone to test these device profiles
// If anyone wants to help improve the playback profile please feel free
// See https://developer.apple.com/documentation/http_live_streaming/hls_authoring_specification_for_apple_devices

export const IOSPlaybackProfile = {
  deviceProfile: {
    maxStreamingBitrate: 12000000000,
    maxStaticBitrate: 120000000000,
    musicStreamingTranscodingBitrate: 192000,
    responseProfiles: [
      {
        container: 'm4v',
        mimeType: 'video/mp4',
        type: DlnaProfileType.Video
      }
    ],
    subtitleProfiles: [
      { format: 'vtt', method: SubtitleDeliveryMethod.External }
    ],
    containerProfiles: [],
    codecProfiles: [
      {
        type: CodecType.VideoAudio,
        codec: 'aac',
        conditions: [
          {
            condition: ProfileConditionType.Equals,
            isRequired: false,
            property: ProfileConditionValue.IsSecondaryAudio,
            value: 'false'
          }
        ]
      },
      {
        type: CodecType.VideoAudio,
        conditions: [
          {
            condition: ProfileConditionType.Equals,
            isRequired: false,
            property: ProfileConditionValue.IsSecondaryAudio,
            value: 'false'
          }
        ]
      },
      {
        type: CodecType.Video,
        codec: 'h264',
        conditions: [
          {
            condition: ProfileConditionType.NotEquals,
            isRequired: false,
            property: ProfileConditionValue.IsAnamorphic,
            value: 'true'
          },
          {
            condition: ProfileConditionType.EqualsAny,
            isRequired: false,
            property: ProfileConditionValue.VideoProfile,
            value: 'high|main|baseline|constrained baseline|high 10'
          },
          {
            condition: ProfileConditionType.LessThanEqual,
            isRequired: false,
            property: ProfileConditionValue.VideoLevel,
            value: '51'
          },
          {
            condition: ProfileConditionType.NotEquals,
            isRequired: false,
            property: ProfileConditionValue.IsInterlaced,
            value: 'true'
          }
        ]
      }
    ],
    directPlayProfiles: [
      {
        audioCodec: 'vorbis,opus',
        container: 'webm',
        type: DlnaProfileType.Video,
        videoCodec: 'vp8,vp9,av1'
      },
      {
        audioCodec: 'mp3,aac,opus,flac,vorbis',
        container: 'mp4,m4v',
        videoCodec: 'h264,av1,vp8,vp9',
        type: DlnaProfileType.Video
      },
      { container: 'opus', type: DlnaProfileType.Audio },
      {
        container: 'mp3',
        type: DlnaProfileType.Audio,
        audioCodec: 'mp3'
      },
      {
        container: 'mp2,mp3',
        type: DlnaProfileType.Audio,
        audioCodec: 'mp2'
      },
      { container: 'aac', type: DlnaProfileType.Audio },
      {
        container: 'm4a,m4b',
        audioCodec: 'aac',
        type: DlnaProfileType.Audio
      },
      { container: 'flac', type: DlnaProfileType.Audio },
      { container: 'alac', type: DlnaProfileType.Audio },
      {
        container: 'm4a,m4b',
        audioCodec: 'alac',
        type: DlnaProfileType.Audio
      },
      { container: 'webma,webm', type: DlnaProfileType.Audio },
      { container: 'wma', type: DlnaProfileType.Audio },
      { container: 'wav', type: DlnaProfileType.Audio },
      { container: 'ogg', type: DlnaProfileType.Audio },
      { container: 'oga', type: DlnaProfileType.Audio }
    ],
    transcodingProfiles: [
      {
        audioCodec: 'aac',
        container: 'ts',
        type: DlnaProfileType.Audio,
        breakOnNonKeyFrames: true,
        context: EncodingContext.Streaming,
        maxAudioChannels: '2',
        protocol: 'hls',
        minSegments: 1
      },
      {
        container: 'aac',
        type: DlnaProfileType.Audio,
        audioCodec: 'aac',
        context: EncodingContext.Streaming,
        maxAudioChannels: '2',
        protocol: 'http'
      },
      {
        container: 'mp3',
        type: DlnaProfileType.Audio,
        audioCodec: 'mp3',
        context: EncodingContext.Streaming,
        protocol: 'http',
        maxAudioChannels: '2'
      },
      {
        container: 'opus',
        type: DlnaProfileType.Audio,
        context: EncodingContext.Streaming,
        audioCodec: 'opus',
        protocol: 'http',
        maxAudioChannels: '2'
      },
      {
        container: 'wav',
        type: DlnaProfileType.Audio,
        audioCodec: 'wav',
        context: EncodingContext.Streaming,
        maxAudioChannels: '2',
        protocol: 'http'
      },
      {
        audioCodec: 'mp3,aac,opus',
        breakOnNonKeyFrames: true,
        container: 'ts',
        context: EncodingContext.Streaming,
        maxAudioChannels: '2',
        minSegments: 1,
        protocol: 'hls',
        type: DlnaProfileType.Video,
        videoCodec: 'h264'
      },
      {
        audioCodec: 'vorbis',
        container: 'webm',
        context: EncodingContext.Streaming,
        maxAudioChannels: '2',
        protocol: 'http',
        type: DlnaProfileType.Video,
        videoCodec: 'vpx'
      },
      {
        audioCodec: 'mp3,aac,opus,flac,vorbis',
        container: 'mp4',
        context: EncodingContext.Static,
        type: DlnaProfileType.Video,
        videoCodec: 'h264'
      }
    ]
  }
};
