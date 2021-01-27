import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { routes } from './routes'

const RootStack = createStackNavigator()

export const Routes = () => (
  <RootStack.Navigator initialRouteName="Welcome" headerMode="none">
    {routes.map((route, i) => (
      <RootStack.Screen
        key={`route_${i}`}
        name={route.name}
        component={route.component}
        options={{ title: route.title }}
      />
    ))}
  </RootStack.Navigator>
)

export const Navigation = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
)
