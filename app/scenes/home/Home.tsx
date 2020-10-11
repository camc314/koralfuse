import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { initItemsApi, api } from '../../services/api';
import { BaseItemDto } from '../../services/fetch-api';

export default function home(): JSX.Element {
  const [libraries, setLibraries] = useState([] as BaseItemDto[]);

  useEffect(() => {
    initItemsApi().then(() => {
      console.log(api);
      api.ItemsApi.getItems({
        uId: '040c17a8-a4ad-4a29-bfa7-1c5b73eef3e3',
        userId: '040c17a8-a4ad-4a29-bfa7-1c5b73eef3e3'
      }).then((result) => {
        console.log(result);
        // Only TV Shows and movies are currently supported
        const filteredResults = result?.items?.filter((item) => {
          return (
            item.collectionType === 'movies' ||
            item.collectionType === 'tvshows'
          );
        });

        if (filteredResults) {
          setLibraries(filteredResults);
        }
      });
    });
  }, []);

  const goToLibraries = (libraryId: string | undefined) => {
    if (libraryId) {
      console.log(`Go To ${libraryId}`);
    } else {
      console.error('Missing libaray Id');
    }
  };

  return (
    <ScrollView
      style={{
        height: '100%',
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10
        }}
      >
        <ScrollView
          style={{
            height: '100%',
            flex: 1
          }}
          horizontal={true}
        >
          {libraries.map((data: BaseItemDto, idx: number) => {
            return (
              <View
                key={idx}
                style={{
                  padding: 10,
                  flexGrow: 1
                }}
              >
                <Pressable
                  onPress={() => goToLibraries(data.id)}
                  style={{
                    backgroundColor: '#007AFF',
                    borderRadius: 10,
                    width: '100%',
                    flex: 1
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 18,
                      color: 'white',
                      margin: 16
                    }}
                  >
                    {data.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
