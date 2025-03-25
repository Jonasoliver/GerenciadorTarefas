import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import Home from './src/screens/home';
import TaskForm from './src/screens/TaskForm';
import SignUpScreen from './src/screens/cadastro'; // Certifique-se de que esta tela esteja correta
import Navbar from './src/components/navbar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculte o cabeçalho na tela de Login
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Navbar />, // Coloque a Navbar no cabeçalho da Home
          }}
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskForm}
          options={{ headerShown: true }} // Mantenha o cabeçalho padrão para TaskForm
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }} // Oculte o cabeçalho na tela de SignUp
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
