import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParamList } from '@navigation/Auth'

import theme from '@styled/theme'
import Text from '@styled/Text'


interface Props {
    navigation: StackNavigationProp<AuthStackParamList>
}

const { height: HEIGHT } = Dimensions.get('screen')

const SignUp: React.FunctionComponent<Props> = ({
    navigation
}) => {
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
        marginBottom: 20
    },
    headerTitle: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        textAlign: 'center'
    }
})

export default SignUp