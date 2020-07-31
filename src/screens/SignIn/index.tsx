import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'

import theme from '@styled/theme'
import Text from '@styled/Text'
import Button from '@styled/Button'
import TextInput from '@styled/TextInput'

import { AuthStackParamList } from '@navigation/Auth'

enum LoginFieldStatus {
    VALID = 'valid',
    INVALID = 'invalid',
    PRESTINE = 'prestine',
    EDITING = 'editing'
}

interface ILoginField {
    value: string,
    status: LoginFieldStatus
}

interface ILoginForm {
    username: ILoginField
    password: ILoginField
    [key: string]: ILoginField
}

interface Props {
    navigation: StackNavigationProp<AuthStackParamList>
}

const SignIn: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        username: {
            value: '',
            status: LoginFieldStatus.PRESTINE
        },
        password: {
            value: '',
            status: LoginFieldStatus.PRESTINE
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

    const handleLoginOnBlur = (key: string) => {
        if (_validateField(loginForm[key].value)) {
            setLoginForm({
                ...loginForm,
                [key]: {
                    ...loginForm[key],
                    status: LoginFieldStatus.VALID
                }
            })
            return
        }
        setLoginForm({
            ...loginForm,
            [key]: {
                ...loginForm[key],
                status: LoginFieldStatus.INVALID
            }
        })
    }

    const handleLoginOnChange = (key: string, value: string): void => {
        setLoginForm({
            ...loginForm,
            [key]: {
                status: LoginFieldStatus.EDITING,
                value
            }
        })
    }

    const isSignUpFormValid = (): boolean => {
        return Object.values(loginForm).every(field => field.status === LoginFieldStatus.VALID)
    }

    const handleOnSubmit = (): void => {
        navigation.navigate('App')
    }

    return (
        <View style={{flex: 1}}>
            <LinearGradient
                style={styles.gradient}
                colors={[theme.color.primary, 'transparent']} />
            <SafeAreaView style={styles.safe}>
                <ScrollView style={styles.container}>
                    <View style={{marginVertical: 40}}>
                        <LottieView 
                            autoPlay
                            loop
                            style={{
                                alignSelf: 'center',
                                width: 120,
                                height: 120
                            }}
                            source={require('@assets/animations/sign-in.json')}
                        />
                    </View>
                    <TextInput 
                        onChangeText={value => handleLoginOnChange('username', value)}
                        onBlur={() => handleLoginOnBlur('username')}
                        placeholder="Username" 
                        autoCorrect={false}
                        autoCompleteType="username"
                        autoCapitalize="none"/>
                    {
                        loginForm.username.status === LoginFieldStatus.INVALID && <Text small danger>Field required.</Text>
                    }
                    <TextInput 
                        onChangeText={value => handleLoginOnChange('password', value)}
                        onBlur={() => handleLoginOnBlur('password')}
                        style={{marginTop: 20}}
                        placeholder="Password"
                        autoCompleteType="password"
                        secureTextEntry/>
                    {
                        loginForm.password.status === LoginFieldStatus.INVALID && <Text small danger>Field required.</Text>
                    }
                </ScrollView>
                <Button  
                    disabled={!isSignUpFormValid()}
                    onPress={handleOnSubmit}
                    style={{marginTop: 20, marginBottom: 10}}
                    square
                    label="Login"/>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    safe: {
        flex: 1,
        marginHorizontal: theme.spacing.margin,
    },
    container: {
    }
})

export default SignIn