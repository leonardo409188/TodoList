import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    flex: 1;
    background-color: transparent;
    align-items: flex-end;
    padding-right: 15px;
    justify-content: center; 
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
`
