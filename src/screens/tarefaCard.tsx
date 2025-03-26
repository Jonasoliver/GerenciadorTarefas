import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskCardProps {
  id?: number;
  title: string;
  description: string;
  priority: string; // Prioridade (Alta, Média, Baixa)
  navigation: any; // Para navegação
  onMarkCompleted: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, priority, navigation, onMarkCompleted, onDelete }) => {
  const [cardColor, setCardColor] = useState('#f0f0f0');
  const [showColorPalette, setShowColorPalette] = useState(false);

  const handleEdit = () => {
    navigation.navigate('TaskForm', { taskId: id, taskTitle: title, taskDescription: description });
  };

  const handleView = () => {
    // Navegar para a tela TaskList passando os parâmetros necessários
    navigation.navigate('TaskList', { taskId: id, taskTitle: title, taskDescription: description });
  };

  const handleCustomize = () => {
    setShowColorPalette(true);
  };

  const handleColorChange = (color: string) => {
    setCardColor(color);
    setShowColorPalette(false);
  };

  const handleRemoveColor = () => {
    setCardColor('#f0f0f0');
    setShowColorPalette(false);
  };

  const handleMarkCompleted = () => {
    onMarkCompleted(id!);
  };

  const handleDelete = () => {
    onDelete(id!);
  };

  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      {/* Prioridade */}
      <View style={[styles.priorityTag, { backgroundColor: priority === 'Alta' ? '#FF5733' : priority === 'Média' ? '#FFBD33' : '#33FF57' }]}>
        <Text style={styles.priorityText}>Prioridade: {priority}</Text>
      </View>

      {/* Título e Descrição */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Ações dos ícones */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
          <MaterialIcons name="edit" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleView} style={styles.iconButton}>
          <MaterialIcons name="visibility" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCustomize} style={styles.iconButton}>
          <MaterialIcons name="color-lens" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Botões de ação - Concluir e Excluir */}
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={handleMarkCompleted} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Concluir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={[styles.actionButton, styles.deleteButton]}>
          <Text style={styles.actionButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de personalização de cor */}
      <Modal
        transparent={true}
        visible={showColorPalette}
        animationType="fade"
        onRequestClose={() => setShowColorPalette(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escolha uma cor</Text>
            <View style={styles.colorPalette}>
              {['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A1'].map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[styles.colorButton, { backgroundColor: color }]}
                  onPress={() => handleColorChange(color)}
                />
              ))}
              <TouchableOpacity
                style={[styles.colorButton, { backgroundColor: '#ccc' }]}
                onPress={handleRemoveColor}
              >
                <Text style={styles.removeColorText}>Nda</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setShowColorPalette(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
  },
  priorityTag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  priorityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  iconButton: {
    backgroundColor: '#6200ea', // Cor roxa para combinar com a navbar
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#6200ea', // Cor do botão
    width: '48%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#6200ea', // Botão de excluir em vermelho
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorPalette: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeColorText: {
    color: '#333',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f44336',
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskCard;
