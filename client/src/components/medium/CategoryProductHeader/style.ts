import styled from 'styled-components';

export const CategoryProductHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  padding: 0 4vw;
  background: var(--white);
  height: 15.733vw;
  border-bottom: 0.267vw solid var(--border-gray);

  &.sticky {
    position: fixed;
    z-index: 2;
    top: 0;
  }

  &.sticky + .category-product-section {
    margin-top: 15.733vw;
  }
`;

export const CategoryChip = styled.div`
  flex-shrink: 0;

  height: 9.333vw;
  padding: 2.667vw;
  border-radius: 3.733vw;
  font-size: 3.467vw;
  line-height: 4vw;
  background: var(--white);
  color: #888888;
  margin-right: 3.733vw;
  scroll-snap-align: center;

  &.selected {
    border-radius: 3.733vw;
    font-weight: bold;
    font-size: 3.467vw;
    line-height: 4vw;
    background: #444444;
    color: var(--white);
  }
`;
