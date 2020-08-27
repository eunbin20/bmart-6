import styled from 'styled-components';

export const CardGridContainer = styled.div`
  ${(props) =>
    props.theme.columns === 2
      ? `
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3.200vw;
        row-gap: 4vw;
      `
      : `
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2.133vw;
        row-gap: 3.733vw;
      `}
`;
