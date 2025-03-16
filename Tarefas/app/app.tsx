import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/home';
import TaskForm from './componentes/TaskForm';

type RootStackParamList = {
  Home: undefined;
  TaskForm: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="TaskForm" 
          component={(props: StackScreenProps<RootStackParamList, 'TaskForm'>) => (
            <TaskForm {...props} onSubmit={(task) => console.log('Nova tarefa:', task)} />
          )} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
