import styled from 'styled-components';

export const CardListViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.theme.length}, 134px);
  overflow-x: scroll;
`;
