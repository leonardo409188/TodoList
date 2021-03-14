import styled, { css } from "styled-components/native";
import ListIcon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';

export const Item = styled.TouchableOpacity`
    ${({ theme }) => css`
        flex-direction: row;
        padding: 5px 0px 10px 0px;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
    `}
`

export const TitleView = styled.View`
    flex-direction: row;
    align-items: center;
`
export const CheckIcon = styled(Check).attrs(props => ({
    name: props.done ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline',
    size: 28,
    color:  props.done ? 'green' : 'black'
}))``

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
        text-decoration-line: ${props => props.done ? 'line-through' : 'none'};
        margin-left: 10px;
    `}
`

export const IconView = styled.TouchableOpacity`
    padding: 10px;
`

export const Icon = styled(ListIcon).attrs(props => ({
    name: 'trash',
    size: 28
}))`
    ${({ theme }) => css`
        color: ${theme.colors.red};
    `}
    
`
