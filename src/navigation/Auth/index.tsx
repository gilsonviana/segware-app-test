import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Launch from '@screens/Launch'
import SignUp from '@screens/SignUp'
import SignIn from '@screens/SignIn'
import AppStack from '@navigation/App'

interface Props {}

export type AuthStackParamList = {
    Launch: undefined,
    SignUp: undefined,
    SignIn: undefined,
    App: undefined
}

const Stack = createStackNavigator<AuthStackParamList>()
const Modal = createStackNavigator<AuthStackParamList>()

export const ModalStack: React.FunctionComponent<Props> = () => {
    return (
        <Modal.Navigator mode="modal" screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' }
        }}>
            <Modal.Screen name="SignUp" component={SignUp}/>
        </Modal.Navigator>
    )
}

const AuthStack: React.FunctionComponent<Props> = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Launch" component={Launch}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="App" component={AppStack}/>
        </Stack.Navigator>
    )
}

export default AuthStack