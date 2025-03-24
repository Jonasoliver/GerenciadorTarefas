import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  menu: {
    flexDirection: "row",
  },
  menuItem: {
    marginLeft: 15,
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    marginTop: 5,
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
