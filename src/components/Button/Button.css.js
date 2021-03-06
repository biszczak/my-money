import styled from 'styled-components';

const RootButton = styled.button`
transition: .3s ease-in-out;
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
export const InlineButtonBlack = styled(RootButton)`
color: ${({ theme }) => theme.colors.black.normal};
margin-top: 15px;
width: 220px;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pink.normal};
  }
`;

export const RegularButton = styled(RootButton)`
  background-color: transparent;
  margin: ${({ theme }) => `${theme.spacing.xs / 2}px`};
  padding: ${({ theme }) => `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`};
  border: ${({ theme }) => `2px solid ${theme.colors.white.normal}`};
  border-radius: 5px;
`;

export const RegularButtonColor = styled(RegularButton)`
border: ${({ theme }) => `2px solid ${theme.colors.pink.normal}`};
background-color: ${({ theme }) => `${theme.colors.pink.normal}`};
border-radius: 21px;
padding: 10px 10px;
front-weight: 300;
margin-top: 19px;
width: 220px;
`;
