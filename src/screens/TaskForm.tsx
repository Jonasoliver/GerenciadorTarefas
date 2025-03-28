import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'; // Importando o axios para fazer requisições HTTP

interface TaskFormProps {
  onSubmit?: (task: { title: string; description: string; startDate: string; endDate: string; priority: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('Medium'); // Prioridade inicial como 'Medium'

  // Função para enviar a tarefa para o backend
  const handleSubmit = async () => {
    if (title.trim() && description.trim() && startDate && endDate) {
      try {
        // Enviar os dados da tarefa para o backend via axios
        const response = await axios.post('http://localhost:3000/tasks', { title, description, startDate, endDate, priority });

        if (response.status === 201) {
          // Se a tarefa foi criada com sucesso, chamar onSubmit (caso exista)
          onSubmit?.({ title, description, startDate, endDate, priority });

          // Resetar campos após o envio
          setTitle('');
          setDescription('');
          setStartDate('');
          setEndDate('');
          setPriority('Medium');
        }
      } catch (error) {
        console.error('Erro ao enviar a tarefa:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adicionar Tarefa</Text>

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

      {/* Botão de envio */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Salvar</Text>
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

export default TaskForm;
