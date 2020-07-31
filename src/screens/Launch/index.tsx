import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

interface Props {}

const Launch: React.FunctionComponent<Props> = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <Text>Launch Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1
    }
})

export default Launch