import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home'
import { LogBox } from 'react-native'

const Stack = createNativeStackNavigator();

function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
