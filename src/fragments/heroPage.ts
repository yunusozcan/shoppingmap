import groq from 'groq';
import {IMAGE} from './image';
import {PRODUCT_WITH_VARIANT} from './productWithVariant';

export const HERO_PAGE = groq`
  content[0] {
    _type,
    (_type == 'image') => {
      ${IMAGE}
    },
    (_type == 'productWithVariant') => {
      ...${PRODUCT_WITH_VARIANT}
    },
  },
  title
`;
