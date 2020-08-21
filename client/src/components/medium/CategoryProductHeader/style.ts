import styled from 'styled-components';

export const CategoryProductHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;

  padding: 0 15px;
  background: var(--white);
  height: 59px;
  border-bottom: 1px solid var(--border-gray);

  &.sticky {
    position: fixed;
    z-index: 2;
    top: 0;
  }

  &.sticky + .category-product-section {
    padding-top: 59px;
  }
`;

export const CategoryChip = styled.div`
  flex-shrink: 0;

  height: 35px;
  padding: 10px;
  border-radius: 14px;
  font-size: 13px;
  line-height: 15px;
  background: var(--white);
  color: #888888;
  margin-right: 14px;

  &.selected {
    border-radius: 14px;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    background: #444444;
    color: var(--white);
  }
`;
