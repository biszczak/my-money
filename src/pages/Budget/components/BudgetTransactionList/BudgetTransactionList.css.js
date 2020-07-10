import styled from 'styled-components';

export const List = styled.ul`
  > li + li {
    margin-top: ${({ theme }) => theme.spacing.xs}px;
  }

  li {
    margin: 0 !important;
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }
`;

export const ListItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  padding: ${({ theme }) => theme.spacing.xl}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    div.iconContainer {
      width: 32px;
      height: 32px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      margin-right: 20px;
    }
  }
`;
