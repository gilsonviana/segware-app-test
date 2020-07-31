import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

import AuthStack, { ModalStack } from '@navigation/Auth'

const Stack = createStackNavigator()

export default function App() {
  const [isCaching, setIsCaching] = useState<boolean>(true)

  const loadResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        'Rubik-Bold': require('@assets/fonts/Rubik-Bold.ttf'),
        'Rubik-Regular': require('@assets/fonts/Rubik-Regular.ttf'),
      }),
      Asset.loadAsync([
        // require('@assets/images/logo.png')
      ]) 
    ])
  }

  const handleOnFinish = () => {
    setIsCaching(false)
  }

  const handleOnError = (err: any) => {
    console.warn('Error', err)
    setIsCaching(false)
  }

  if (isCaching) {
    return <AppLoading startAsync={loadResourcesAsync} onFinish={handleOnFinish} onError={handleOnError} />
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen name="Launch" component={AuthStack} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={ModalStack} options={{headerShown: false, cardStyle: { backgroundColor: 'transparent' }}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
