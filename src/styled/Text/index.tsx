import * as React from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const StyledText = styled.Text<Props>`
    text-decoration: ${({underline}) => underline ? 'underline' : 'none'};
    text-align: ${({center}) => center ? 'center' : 'left'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    color: ${({light, danger, grey}) => light ? theme.color.light : danger ? theme.color.danger : grey ? theme.color.darkGrey : theme.color.dark};
    font-size: ${({large, small}) => large ? theme.font.size.large : small ? theme.font.size.small : theme.font.size.regular};
`

interface Props extends TextProps {
    grey?: boolean
    underline?: boolean
    center?: boolean
    bold?: boolean
    light?: boolean
    danger?: boolean
    large?: boolean
    small?: boolean
}

const Text: React.FunctionComponent<Props> = (props) => {
    return <StyledText {...props}/>
}

export default Text