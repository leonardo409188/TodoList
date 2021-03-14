import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/AntDesign';

export const BackgroundContainer = styled.View`
	${({ theme }) => css`
		flex: 1;
		background-color: ${theme.colors.black};
	`}
    
`

export const ContentContainer = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.white} ;
		flex: 4;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		padding: 50px 35px 00px 35px;
		justify-content: space-between;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xlarge};
		font-weight: bold;
		margin-bottom: 20px;
	`}
`

export const EmptyListText = styled.Text`
	align-self: center;
	font-size: 20px;
	margin-top: 50px;
`
export const TitleView = styled.View`
	flex: 5;
`

export const ButtonView = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`

export const Button = styled.TouchableOpacity`
	${({ theme }) => css`
		width: 70px;
		height: 70px;
		border-radius: 70px;
		background-color: ${theme.colors.blue};
		align-items: center;
		justify-content: center;
	`}

`

export const ButtonIcon = styled(Icon).attrs(props => ({
	name: 'plus',
	size: 35,
	color: props.theme.colors.white
}))``

export const Modal = styled.Modal`
`

export const CenteredView = styled.View`
	${({ theme }) => css`
		flex: 1;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.transparent};
	`}
	
`

export const ModalView = styled.View`
	${({ theme }) => css`
		width: 85%;
		background-color: ${theme.colors.white};
		border-radius: 15px;
		padding: 20px;
		height: auto;
		min-height: 150px;
		display: flex;
	`}
`

export const ModalTitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: ${theme.font.sizes.large};
		font-weight: bold;
		margin: 5px  0px;
	`}	
`

export const ModalInput = styled.TextInput.attrs({
	placeholder: 'New Task',
})`
    ${({ theme }) => css`
		margin-top: 25px;
        height: 40px;
        padding: 3px 10px;
        border-bottom-color: ${theme.colors.gray};
        border-bottom-width: .8px;
		font-size: ${theme.font.sizes.medium};
	`}
`

export const ButtonsView = styled.View`
	flex-direction: row;
`

export const ModalButton = styled.TouchableOpacity`
	${({ theme }) => css`
        height: 50px;
		flex: 1;
        background-color: ${props => props.disabled ? theme.colors.gray : props.cancel ? theme.colors.red : theme.colors.blue};
        border-radius: 50px;
		margin: 35px 5px 0px 5px;
        align-items: center;
        justify-content: center;
    `}
`

export const ButtonText = styled.Text`
	${({ theme }) => css`
        font-size: ${theme.font.sizes.large};
		color: ${props => props.disabled ? theme.colors.black : theme.colors.white};
	`};
`

export const TaskList = styled.FlatList`
	flex: 1;
`



