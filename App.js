import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Components/Home'
import Details from './Components/Details'
import OrderDelivery from './Components/OrderDelivery'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='OrderDelivery'
          component={OrderDelivery}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  

})