import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15, // Aumentamos o padding para dar mais altura à navbar
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15, // Arredondar mais os cantos para ficar mais moderno
    borderBottomRightRadius: 15,
    backgroundColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Aumentamos a sombra para um efeito mais suave
    shadowOpacity: 0.1,
    shadowRadius: 6,
    zIndex: 1000, // Garante que a navbar não seja sobreposta pelas notificações
  },
  title: {
    fontSize: 24, // Aumentamos o tamanho da fonte para dar mais destaque ao título
    color: "#fff",
    fontWeight: "bold", // Torna o título mais robusto
  },
  menu: {
    flexDirection: "row",
    alignItems: "center", // Garantir que os itens do menu fiquem alinhados corretamente
  },
  menuItem: {
    marginLeft: 20, // Aumentamos a margem para dar mais espaçamento entre os itens
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14, // Reduzimos o tamanho da fonte para um melhor equilíbrio visual
  },
  // Estilos para o modal
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f44336",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#4caf50",
  },
});
