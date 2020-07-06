import styled from 'styled-components';

const RootButton = styled.button`
color: ${({ theme: { colors }, primary }) => primary ? colors.gray.light : colors.white.normal};
  cursor: inherit;
  border: none;
  background-color: transparent;
  cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'};

  &:hover {
    opacity: .8;
  }
`;

export const InlineButton = styled(RootButton)`
  &:hover {
    text-decoration: none;
  }
`;

export const RegularButton = styled(RootButton)`
  background-color: transparent;
  margin: ${({ theme }) => `${theme.spacing.xs / 2}px`};
  padding: ${({ theme }) => `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`};
  border: ${({ theme }) => `2px solid ${theme.colors.white.normal}`};
  border-radius: 5px;
`;
