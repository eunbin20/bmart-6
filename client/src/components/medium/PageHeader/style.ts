import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15px;
`;

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: space-between;
  align-items: center;
`;
export const PageHeaderTrailing = styled.div`
  display: flex;
  justify-content: flex-end;

  & > .f7-icons {
    margin-left: 18px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 14px;
  margin-bottom: 13px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  font-size: 12px;
  line-height: 14px;
  color: var(--dark-gray);

  & > .f7-icons {
    margin-right: 12px;
  }
`;

export const LogoContainer = styled.span.attrs((props) => ({
  onClick: props.onClick,
}))``;
