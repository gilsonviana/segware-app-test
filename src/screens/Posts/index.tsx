import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {}

import theme from '@styled/theme'
import Text from '@styled/Text'
import PostCard from '@styled/PostCard'

const Posts: React.FunctionComponent<Props> = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text>Posts</Text>
            <PostCard />
        </SafeAreaView>
    )
}

export default Posts