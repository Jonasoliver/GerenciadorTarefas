import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from '../app/componentes/navbar'; 
import Home from '../app/componentes/home';   

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />  {/* Exibindo a Navbar */}
      <Home />    {/* Exibindo o componente Home */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco
  },
});
