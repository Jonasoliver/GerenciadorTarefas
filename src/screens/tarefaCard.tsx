import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskCardProps {
  id?: number; // Agora o ID é opcional
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description }) => {
  const [cardColor, setCardColor] = useState('#f0f0f0'); // Cor inicial do card
  const [showColorPalette, setShowColorPalette] = useState(false); // Controla a exibição da paleta de cores

  const handleEdit = () => {
    Alert.alert('Editar', `Você clicou para editar a tarefa: ${title}`);
  };

  const handleView = () => {
    Alert.alert('Visualizar', `Você clicou para visualizar a tarefa: ${title}`);
  };

  const handleCustomize = () => {
    setShowColorPalette(true); // Abre a paleta de cores
  };

  const handleColorChange = (color: string) => {
    setCardColor(color); // Altera a cor do card
    setShowColorPalette(false); // Fecha a paleta de cores
  };

  const handleRemoveColor = () => {
    setCardColor('#f0f0f0'); // Reseta a cor para o padrão
    setShowColorPalette(false); // Fecha a paleta de cores
  };

  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

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
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#dc3545',
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskCard;
