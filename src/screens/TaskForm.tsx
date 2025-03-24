import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../styles/TaskFormStyles';

interface TaskFormProps {
  onSubmit?: (task: { title: string; description: string; startDate: string; endDate: string; priority: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('Medium'); // Prioridade inicial como 'Medium'

  const handleSubmit = () => {
    if (title.trim() && description.trim() && startDate && endDate) {
      onSubmit?.({ title, description, startDate, endDate, priority });
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setPriority('Medium'); // Resetar a prioridade
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Form</Text>

      {/* Título da tarefa */}
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Descrição da tarefa */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Data de início */}
      <TextInput
        style={styles.input}
        placeholder="Start Date (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
      />

      {/* Data de término */}
      <TextInput
        style={styles.input}
        placeholder="End Date (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
      />

      {/* Prioridade */}
      <TextInput
        style={styles.input}
        placeholder="Priority (High, Medium, Low)"
        value={priority}
        onChangeText={setPriority}
      />

      {/* Botão de envio */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
