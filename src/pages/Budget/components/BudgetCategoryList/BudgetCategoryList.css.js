import styled from 'styled-components';

export const Category = styled.div`
border: 1px solid ${({ theme }) => theme.colors.gray.dark};
padding: ${({ theme }) => theme.spacing.xs}px;
display: flex;
align-items: center;
`;

export const ParentCategory = styled(Category)`
background-color: ${({ theme }) => theme.colors.white.normal};
border: none;
display: flex;
transition: .3s ease-in-out;
cursor: pointer;
margin-right: ${({ theme }) => theme.spacing.xl}px;
font-weight: 400;
border-bottom: 3px solid ${({ theme }) => theme.colors.white.normal};

.description {
display: flex;
flex-direction: column;
}

&:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.pink.normal};
}
`

export const CategoryItem = styled(Category)`
background-color: ${({ theme }) => theme.colors.white.normal};
border: none;

div.iconContainer {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    font-size: 20px;
    margin-right: 10px;

    svg {
        margin-top: 10px;
        margin-left: 10px;
    }
}

div.content {
    display: flex;
    flex-direction: column;
}
`;

export const CategoryAmount = styled.span`
font-weight: 400;
color: ${({ theme, negative }) => negative ? theme.colors.red.normal : theme.colors.green.normal};
font-size: 14px;
`