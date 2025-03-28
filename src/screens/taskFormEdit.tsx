import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native'; // Importando useRoute

interface Task {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
}

interface TaskFormEditProps {
  route: any;
  onSubmit?: (task: Task) => void;
}

const TaskFormEdit: React.FC<TaskFormEditProps> = ({ route, onSubmit }) => {
  const { taskId, taskTitle, taskDescription } = route.params || {}; // Pegando os parâmetros

  // Verificando se os parâmetros são válidos
  if (!taskId || !taskTitle || !taskDescription) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Erro: Dados da tarefa não encontrados</Text>
      </View>
    );
  }

  // Estado para os campos do formulário
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('Média');

  // Função para editar a tarefa
  const handleEditSubmit = async () => {
    if (title.trim() && description.trim() && startDate && endDate) {
      try {
        // Enviar os dados da tarefa atualizada para o backend via axios
        const response = await axios.put(`http://localhost:3000/tasks/${taskId}`, {
          title,
          description,
          startDate,
          endDate,
          priority,
        });

        if (response.status === 200) {
          // Se a tarefa foi atualizada com sucesso, chamar onSubmit (caso exista)
          onSubmit?.({ id: taskId, title, description, startDate, endDate, priority });

          // Resetar campos após o envio
          setTitle('');
          setDescription('');
          setStartDate('');
          setEndDate('');
          setPriority('Média');
        }
      } catch (error) {
        console.error('Erro ao editar a tarefa:', error);
        Alert.alert('Erro', 'Não foi possível atualizar a tarefa. Tente novamente.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Tarefa</Text>

      {/* Título da tarefa */}
      <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
      />

      {/* Descrição da tarefa */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição da Tarefa"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Data de início */}
      <TextInput
        style={styles.input}
        placeholder="Data de Início (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
      />

      {/* Data de término */}
      <TextInput
        style={styles.input}
        placeholder="Data de Término (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
      />

      {/* Prioridade */}
      <TextInput
        style={styles.input}
        placeholder="Prioridade (Alta, Média, Baixa)"
        value={priority}
        onChangeText={setPriority}
      />

      {/* Botão de edição */}
      <TouchableOpacity style={styles.saveButton} onPress={handleEditSubmit}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8', // Cor mais suave para o fundo
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6200ea', // Cor roxa, igual à navbar
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff', // Branco para os campos de texto
    fontSize: 16,
    color: '#333', // Cor do texto dentro dos campos
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Alinha o texto no topo para uma área de descrição
  },
  saveButton: {
    width: '100%', // Botão comprido
    paddingVertical: 15,
    borderRadius: 8, // Borda arredondada
    backgroundColor: '#6200ea', // Cor roxa
    marginTop: 20, // Distância do último input
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TaskFormEdit;
