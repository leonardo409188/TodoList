import React from 'react';
import {
	Item,
    TitleView,
    CheckIcon,
	Icon,
	IconView,
    Title
} from './styles';

interface Props {
    data: any,
    onPressList?: () => void,
    onLongPress?: () => void,
    onPressIcon?: () => void
}

export const List = (({ data, onPressList, onLongPress, onPressIcon }: Props) => {
    return (
        <Item onPress={onPressList} onLongPress={onLongPress}>
            <TitleView>
                <CheckIcon done={data.done} />
                <Title done={data.done}>{data.task}</Title>
            </TitleView>
           
            <IconView onPress={onPressIcon}>
                <Icon/>
            </IconView>
        </Item>
    )
})
