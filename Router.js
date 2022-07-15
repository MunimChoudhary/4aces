import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotificationsPage from './pages/NotificationsPage'
import ProfilePage from './pages/ProfilePage'
import FeedPage from './pages/FeedPage'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function Auth() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: {
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='Register' component={RegisterPage} />
    </Stack.Navigator>
  )
}

function Home() {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#15803D',
      }}
    >
      <Tab.Screen
        name='Feed'
        component={FeedPage}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={NotificationsPage}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bell' color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name='Test'
        component={Auth}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}

function Router({ user }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor='#15803D'
          barStyle='light-content'
          showHideTransition='slide'
        />
        {user.loggedin ? <Home /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const MapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(MapStateToProps, {})(Router)
