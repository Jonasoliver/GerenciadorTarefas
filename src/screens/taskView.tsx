import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native'; // Importar para acessar os parâmetros de navegação
import { RootStackParamList } from '../../App';

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
  // Dados fictícios de tarefas
  const tasks: Task[] = [
    {
      title: 'Reunião de equipe',
      description: 'Discutir os próximos passos do projeto com a equipe.',
      startDate: '2025-03-29',
      endDate: '2025-03-29',
      priority: 'Alta',
    },
  ];

  const task = tasks[0]; // Vamos exibir apenas a primeira tarefa

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes da Tarefa</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Título:</Text>
        <Text style={styles.input}>{task.title}</Text>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.input}>{task.description}</Text>

        <Text style={styles.label}>Início:</Text>
        <Text style={styles.input}>{task.startDate}</Text>

        <Text style={styles.label}>Término:</Text>
        <Text style={styles.input}>{task.endDate}</Text>

        <Text style={styles.label}>Prioridade:</Text>
        <Text style={[styles.priority, getPriorityStyle(task.priority)]}>
          {task.priority}
        </Text>
      </View>
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
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  priority: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
});

export default TaskListScreen;
