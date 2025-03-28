import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import Home from './src/screens/home';
import TaskForm from './src/screens/TaskForm';
import SignUpScreen from './src/screens/cadastro';
import Navbar from './src/components/navbar';
import TaskListScreen from './src/screens/taskView';
import TaskFormEdit from './src/screens/taskFormEdit';

type Task = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
  id: number; // Adicionando o id para identificação da tarefa
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TaskForm: undefined;
  TaskFormEdit: { task: Task }; // Agora estamos passando um parâmetro para a tela de edição
  SignUp: undefined;
  TaskList: { tasks: Task[] };  // Tarefa agora é um array de tarefas
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho na tela de Login
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Navbar />, // Colocar a Navbar no cabeçalho da Home
          }}
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskForm}
          options={{
            header: () => <Navbar />, // Colocar a Navbar no cabeçalho da TaskForm
          }}
        />
        <Stack.Screen
          name="TaskFormEdit"
          component={TaskFormEdit} // Nova tela de edição
          options={{
            header: () => <Navbar />, // Colocar a Navbar no cabeçalho da TaskFormEdit
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho na tela de SignUp
        />
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{
            header: () => <Navbar />, // Colocar a Navbar no cabeçalho da TaskListScreen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
