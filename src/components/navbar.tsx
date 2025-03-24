import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import styles from "../styles/navBarStyles";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Controla a visibilidade do Modal
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Armazena a opção selecionada

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // Alterna a visibilidade do Modal
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // Define a opção selecionada
    toggleModal(); // Fecha o modal após selecionar a opção
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>TaskFlow</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={28} color="#fff" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        {/* Tarefa com funcionalidade de ordenação */}
        <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
          <Ionicons name="list-outline" size={28} color="#fff" />
          <Text style={styles.menuText}>Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={28} color="#fff" />
          <Text style={styles.menuText}>Config</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de opções de ordenação */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
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
