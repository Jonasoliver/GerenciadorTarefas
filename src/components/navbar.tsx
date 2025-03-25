import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/navBarStyles";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    toggleModal();
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>TaskFlow</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
          <Ionicons name="list-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Config</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de opções de ordenação */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ordenar por</Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Prioridade')}>
              <Text style={styles.optionText}>Ordenar por Prioridade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Data de Criação')}>
              <Text style={styles.optionText}>Ordenar por Data de Criação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Ordem Alfabética')}>
              <Text style={styles.optionText}>Ordenar por Ordem Alfabética</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Navbar;
