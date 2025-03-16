import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles/TaskFormStyles';

interface TaskFormProps {
  onSubmit?: (task: { title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit?.({ title, description }); // Chama onSubmit apenas se for fornecido
      setTitle('');
      setDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
