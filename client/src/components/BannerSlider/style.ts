import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const BannerList = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  list-style-type: none;
  flex-direction: row;
  user-select: none;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  flex-shrink: 0;
`;

export const BannerLink = styled(Link)`
  cursor: pointer;
`;

export const BannerImage = styled.img`
  width: 100%;
`;
