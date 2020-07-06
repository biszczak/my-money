import styled from 'styled-components';

export const Grid = styled.div`
@import url('${({ theme }) => theme.fonts.familyFont.all}');
display: flex;
section:nth-child(1) {
    width: 50%;
    margin-top: 90px;
}
section:nth-child(2) {
    width: 50%;
    margin-top: 90px;
}
font-family: ${({ theme }) => theme.fonts.familyFont.name};
`

export const Image = styled.img`
width: 100%;
`