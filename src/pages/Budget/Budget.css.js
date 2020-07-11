import styled from 'styled-components';

export const Grid = styled.div`
@import url('${({ theme }) => theme.fonts.familyFont.import}');
font-family: ${({ theme }) => theme.fonts.familyFont.name};
font-weight: 300;
display: flex;
flex-direction: column;
margin-top: 30px;
width: calc(100% - 30px);
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
    padding-right: 15px;
    padding-left: 15px;

section:nth-child(1) {
    position: relative;
}

section:nth-child(2) {
    position: relative;
    margin-top: 60px;
}
`