import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native'; // Importar para acessar os parâmetros de navegação
import { RootStackParamList } from '../../App'

// Definir o tipo das propriedades passadas pela navegação
interface Task {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
}

type TaskListScreenRouteProp = RouteProp<RootStackParamList, 'TaskList'>;

interface TaskListScreenProps {
  route: TaskListScreenRouteProp;
}

const TaskListScreen: React.FC<TaskListScreenProps> = ({ route }) => {
  const { tasks } = route.params; // Acessando as tarefas passadas pela navegação

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskDates}>
        <Text style={styles.boldText}>Início:</Text> {item.startDate} {" | "}
        <Text style={styles.boldText}>Término:</Text> {item.endDate}
      </Text>
      <Text style={[styles.priority, getPriorityStyle(item.priority)]}>
        {item.priority}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Tarefas</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

// Função para determinar a cor da prioridade
const getPriorityStyle = (priority: string) => {
  switch (priority) {
    case 'Alta':
      return { backgroundColor: '#ff3b30' }; // Vermelho para alta
    case 'Média':
      return { backgroundColor: '#ff9500' }; // Laranja para média
    case 'Baixa':
      return { backgroundColor: '#4cd964' }; // Verde para baixa
    default:
      return {};
  }
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  taskDates: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  priority: {
    fontSize: 14,
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default TaskListScreen;
