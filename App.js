import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash'
import Home from './screens/Home'
import {Provider} from 'react-redux'
import { Store } from './redux/store';

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Task"
            component={Task}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App