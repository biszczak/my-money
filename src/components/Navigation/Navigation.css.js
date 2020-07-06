import styled from 'styled-components';

import Wrapper from '../Wrapper';

export const Container = styled.div`
@import url('${({ theme }) => theme.fonts.familyFont.import}');
font-family: ${({ theme }) => theme.fonts.familyFont.name};
font-weight: 300;
background-color: ${({ theme }) => theme.colors.pink.normal};
display: flex;
padding: ${({ theme }) => theme.spacing.sm}px 0;
justify-content: space-between;
`;

export const NavigationWrapper = styled(Wrapper)`
display: flex;
justify-content: space-between;
align-items: baseline;
`;

export const List = styled.ul`
    display: flex;
`;