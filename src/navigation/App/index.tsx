import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Posts from '@screens/Posts'

interface Props {}

export type AppStackParamList = {
    Posts: undefined,
    CreatePost: undefined
}

const Stack = createStackNavigator<AppStackParamList>()
const Modal = createStackNavigator<AppStackParamList>()

export const ModalStack: React.FunctionComponent<Props> = () => {
    return (
        <Modal.Navigator mode="modal" screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' }
        }}>
            {/* <Modal.Screen name="CreatePost" component={}/> */}
        </Modal.Navigator>
    )
}

const AppStack: React.FunctionComponent<Props> = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Posts" component={Posts}/>
        </Stack.Navigator>
    )
}

export default AppStack