import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient'

import theme from '@styled/theme'
import Button from '@styled/Button'

import { AuthStackParamList } from '@navigation/Auth'

interface Props {
    navigation: StackNavigationProp<AuthStackParamList>
}

const Launch: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const handleSignUpOnPress = (): void => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={{flex: 1}}>
            <LinearGradient
                style={styles.gradient}
                colors={[theme.color.primary, 'transparent']} />
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text>Launch Screen</Text>
                    <View style={styles.bottom}>
                        <Button 
                            onPress={handleSignUpOnPress}
                            label="Sign up"/>
                        <Button 
                            link
                            onPress={handleSignUpOnPress}
                            label="Already have an account? Log in"/>
                    </View>
                </View>
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
    container: {
        flex: 1,
        marginHorizontal: theme.spacing.margin
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40
    }
})

export default Launch