import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentScreen from '@src/screens/content';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from '@src/screens/home-tab';
import AccountTabScreen from '@src/screens/account-tab';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@src/constants/colors';
import DetailScreen from '@src/screens/detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: SECONDARY_COLOR,
        unmountOnBlur: true,
      })}>
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Konten" component={ContentScreen} />
      <Tab.Screen name="Akun" component={AccountTabScreen} />
    </Tab.Navigator>
  );
}

function Routes(props: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MainTabScreen'}
        screenOptions={{
          gestureEnabled: true,
          animation: 'slide_from_right',
          headerBackTitle: '',
        }}>
        <Stack.Screen
          name="MainTabScreen"
          component={MainTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{
            headerTitle: 'Content',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerTitle: 'Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
