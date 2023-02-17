import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/views/home/Home";
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        backgroundColor="#000"
        color="#fff"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
