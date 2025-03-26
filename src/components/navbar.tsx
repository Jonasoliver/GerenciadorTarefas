import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation
import { StackNavigationProp } from '@react-navigation/stack'; // Importe StackNavigationProp

import styles from "../styles/navBarStyles";

// Defina os tipos da navegação que você usou no App.tsx
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TaskForm: undefined;
  SignUp: undefined;
};

type NavbarNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>; // Tipando o navigation para a tela Home

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const navigation = useNavigation<NavbarNavigationProp>();  // Passando o tipo correto para o useNavigation()

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    toggleModal();
  };

  const handleAddTask = () => {
    navigation.navigate('TaskForm');  // Navegar para a tela de TaskForm
  };

  const handleHomeClick = () => {
    // Isso vai garantir que você navegue para a tela Home
    navigation.navigate('Home');  // Força a navegação para a tela Home
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>TaskFlow</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleHomeClick}>
          <Ionicons name="home-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
          <Ionicons name="list-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Tarefas</Text>
        </TouchableOpacity>

        {/* Alterando para usar o ícone de adicionar e a navegação */}
        <TouchableOpacity style={styles.menuItem} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={26} color="#fff" />
          <Text style={styles.menuText}>Adicionar</Text>
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
