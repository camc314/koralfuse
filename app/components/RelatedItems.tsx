import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { BaseItemDto } from '../services/fetch-api';
import HomeSection from './HomeSection';

type Props = {
  itemId: string;
  emptySectionCallback?: () => void;
};

export default function RelatedItems({
  itemId,
  emptySectionCallback
}: Props): JSX.Element {
  const [relatedItems, setRelatedItems] = useState([] as BaseItemDto[]);

  useEffect(() => {
    api.LibraryApi.getSimilarItems({
      userId: api.userInfo.user?.id,
      itemId: itemId || ''
    }).then((result) => {
      if (result.items) {
        setRelatedItems(result.items);
      } else {
        if (emptySectionCallback) emptySectionCallback();
      }
    });
  }, []);

  return <HomeSection data={relatedItems} sectionType="relatedItems" />;
}
