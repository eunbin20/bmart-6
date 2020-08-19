import styled from 'styled-components';

export const CardGridContainer = styled.div`
  ${(props) =>
    props.theme.columns === 2
      ? `
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 12px;
        row-gap: 15px;
      `
      : `
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 8px;
        row-gap: 14px;
      `}
`;
