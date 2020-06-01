import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${Normalize}

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li + li {
      margin-left: ${({ theme }) => theme.spacing.xs}px;
    }
  }
`
