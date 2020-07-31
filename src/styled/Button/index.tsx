import * as React from 'react'
import { TouchableOpacityProps, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const { width } = Dimensions.get('screen')

const StyledContainer = styled.TouchableOpacity<Props>`
    border-radius: ${({square}) => square ? 0 : width / 2}px;
    padding: ${theme.font.size.regular} 0;
    background-color: ${({disabled, link}) => link ? 'transparent' : disabled ? theme.color.primaryAlt : theme.color.primary};
`

const StyledText = styled.Text<{ link?: boolean }>`
    font-weight: bold;
    text-align: center;
    color: ${({link}) => link ? theme.color.dark : theme.color.light};
`

interface Props extends TouchableOpacityProps {
    square?: boolean
    link?: boolean
    label: React.ReactChild
    disabled?: boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <StyledContainer {...props}>
            <StyledText link={props.link}>
                {props.label}
            </StyledText>
        </StyledContainer>
    )
}

export default Button
