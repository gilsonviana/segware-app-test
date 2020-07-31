import * as React from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const StyledInput = styled.TextInput`
    border: 1px solid ${theme.color.primaryAlt};
    border-radius: 3px;
    padding-top: ${theme.font.size.regular};
    padding-bottom: ${theme.font.size.regular};
    padding-left: ${theme.font.size.regular};
`

interface Props extends TextInputProps {}

const TextInput: React.FunctionComponent<Props> = (props) => {
    return (
        <StyledInput {...props} />
    )
}

export default TextInput