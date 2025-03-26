import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TaskCard from './tarefaCard';

const Home: React.FC = ({ navigation }: any) => {  
  const tasks = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', priority: 'Alta' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', priority: 'Média' },
    { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3', priority: 'Baixa' },
  ];

  const handleMarkCompleted = (id: number) => {
    alert(`Tarefa ${id} concluída!`);
  };

  const handleDelete = (id: number) => {
    alert(`Tarefa ${id} excluída!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Tarefas</Text>
      <ScrollView>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}  // Passando a prioridade
              navigation={navigation}  // Passando navigation para o TaskCard
              onMarkCompleted={handleMarkCompleted}  // Passando a função de concluir
              onDelete={handleDelete}  // Passando a função de excluir
            />
          ))
        ) : (
          <Text style={styles.noTasksText}>Ainda não há tarefas!</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noTasksText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Home;
