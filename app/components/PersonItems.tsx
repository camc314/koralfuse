import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { BaseItemDto } from '../services/fetch-api';
import HomeSection from './HomeSection';

type sectionType = 'personMovies' | 'personTv';

type Props = {
  itemId: string;
  sectionType: sectionType;
  emptySectionCallback?: () => void;
};

export default function personItems({
  itemId,
  sectionType,
  emptySectionCallback
}: Props): JSX.Element {
  const [personItems, setPersonItems] = useState([] as BaseItemDto[]);

  useEffect(() => {
    const options = {
      uId: api?.userInfo?.user?.id || '',
      userId: api.userInfo.user?.id,
      includeItemTypes: '',
      recursive: true,
      personIds: itemId
    };

    switch (sectionType) {
      case 'personMovies':
        options.includeItemTypes = 'Movie';
        break;
      case 'personTv':
        options.includeItemTypes = 'Series';
        break;
    }

    api.ItemsApi.getItems(options).then((result) => {
      if (result.items) {
        setPersonItems(result.items);
      } else if (emptySectionCallback) emptySectionCallback();
    });
  }, []);

  return <HomeSection data={personItems} sectionType={sectionType} />;
}
