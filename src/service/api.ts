import axios from 'axios';

// Cria uma instância do Axios configurada para o seu backend
const api = axios.create({
  baseURL: 'http://localhost:3000', // A URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
