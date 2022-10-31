import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentScreen from '@src/screens/content';

const Stack = createNativeStackNavigator();

function Routes(props: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'ContentScreen'}
        screenOptions={{
          gestureEnabled: true,
          animation: 'slide_from_right',
          headerBackTitle: '',
        }}>
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{
            headerTitle: 'Content',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
