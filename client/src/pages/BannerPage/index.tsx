import React from 'react';
import * as S from './style';
import BannerSlider from '../../components/mediums/BannerSlider';
import DefaultTemplate from '../Default';
import { Banner } from '../../types/data';

const banners: Banner[] = [
  {
    id: 1,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576935-7b9a3a00-e1fa-11ea-892c-58cbeed119a3.png',
  },
  {
    id: 2,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576940-7d63fd80-e1fa-11ea-9224-0561d69749da.png',
  },
  {
    id: 3,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576940-7d63fd80-e1fa-11ea-9224-0561d69749da.png',
  },
  {
    id: 4,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576935-7b9a3a00-e1fa-11ea-892c-58cbeed119a3.png',
  },
];

function BannerPage(): React.ReactElement {
  return (
    <DefaultTemplate>
      <BannerSlider banners={banners} />
      <BannerSlider banners={banners} />
      <BannerSlider banners={banners} />
    </DefaultTemplate>
  );
}

export default BannerPage;
