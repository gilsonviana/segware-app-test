import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParamList } from '@navigation/Auth'

import theme from '@styled/theme'
import Text from '@styled/Text'
import TextInput from '@styled/TextInput'
import Button from '@styled/Button'


enum SignUpFieldStatus {
    VALID = 'valid',
    INVALID = 'invalid',
    PRESTINE = 'prestine',
    EDITING = 'editing'
}

interface ISignUpField {
    value: string,
    status: SignUpFieldStatus
}

interface ISignUpForm {
    username: ISignUpField
    password: ISignUpField
    [key: string]: ISignUpField
}

interface Props {
    navigation: StackNavigationProp<AuthStackParamList>
}

const { height: HEIGHT } = Dimensions.get('screen')

const SignUp: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        username: {
            value: '',
            status: SignUpFieldStatus.PRESTINE
        },
        password: {
            value: '',
            status: SignUpFieldStatus.PRESTINE
        }
    })

    /**
     * @description Given a value return true if not empty
     * @param value String to be validate
     * @return Boolean
     */
    const _validateField = (value: string): boolean => {
        if (!value.trim()) return false
        return true
    }   

    const isSignUpFormValid = (): boolean => {
        return Object.values(signUpForm).every(field => field.status === SignUpFieldStatus.VALID)
    }

    const handleSignUpOnBlur = (key: string) => {
        if (_validateField(signUpForm[key].value)) {
            setSignUpForm({
                ...signUpForm,
                [key]: {
                    ...signUpForm[key],
                    status: SignUpFieldStatus.VALID
                }
            })
            return
        }
        setSignUpForm({
            ...signUpForm,
            [key]: {
                ...signUpForm[key],
                status: SignUpFieldStatus.INVALID
            }
        })
    }

    const handleSignUpOnChange = (key: string, value: string): void => {
        setSignUpForm({
            ...signUpForm,
            [key]: {
                status: SignUpFieldStatus.EDITING,
                value
            }
        })
    }

    const handleOnSubmit = (): void => {
        console.log("signUpForm", signUpForm)
    }

    const handleDismiss = (): void => {
        navigation.goBack()
    }

    return (
        <View style={styles.backContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleDismiss} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                        <AntDesign name="close" size={24} color={theme.color.dark} />
                    </TouchableOpacity>
                    <Text bold large style={styles.headerTitle}>Register</Text>
                </View>
                <ScrollView>
                    <TextInput 
                        onChangeText={value => handleSignUpOnChange('username', value)}
                        onBlur={() => handleSignUpOnBlur('username')}
                        placeholder="Username" 
                        autoCorrect={false}
                        autoCompleteType="username"
                        autoCapitalize="none"/>
                    {
                        signUpForm.username.status === SignUpFieldStatus.INVALID && <Text small danger>Field required.</Text>
                    }
                    <TextInput 
                        onChangeText={value => handleSignUpOnChange('password', value)}
                        onBlur={() => handleSignUpOnBlur('password')}
                        style={{marginTop: 20}}
                        placeholder="Password"
                        autoCompleteType="password"
                        secureTextEntry/>
                    {
                        signUpForm.password.status === SignUpFieldStatus.INVALID && <Text small danger>Field required.</Text>
                    }
                    <Button  
                        disabled={!isSignUpFormValid()}
                        onPress={handleOnSubmit}
                        style={{marginTop: 20, marginBottom: 10}}
                        square
                        label="Sign up"/>
                    <Text small center>By signing up, you agree with our terms of use</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: HEIGHT * .15,
        backgroundColor: theme.color.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingTop: 40,
        paddingHorizontal: theme.spacing.margin
    },
    header: {
        flexDirection: 'row',
        marginBottom: 30
    },
    headerTitle: {
        zIndex: -1,
        position: 'absolute', 
        left: 0, 
        right: 0, 
        textAlign: 'center'
    }
})

export default SignUp