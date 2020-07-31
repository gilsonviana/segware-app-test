import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Launch from '@screens/Launch'
import SignUp from '@screens/SignUp'

interface Props {}

export type AuthStackParamList = {
    Launch: undefined,
    SignUp: undefined,
    SignIn: undefined
}

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack: React.FunctionComponent<Props> = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Launch" component={Launch}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{cardStyle: { backgroundColor: 'transparent' }}}/>
            {/* <Stack.Screen name="SignIn" component={}/> */}
        </Stack.Navigator>
    )
}

export default AuthStack