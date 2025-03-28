import express, { Request, Response } from 'express';
import { createTask } from './services/taskService'; // Ajuste o caminho conforme necessário

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para interpretar o corpo das requisições como JSON

// Definindo a rota POST para criar uma nova tarefa
app.post('/tasks', (req: Request, res: Response) => { // Removendo a tipagem explícita de retorno
  const { title, description, startDate, endDate, priority } = req.body;

  // Verificação básica para garantir que todos os campos foram preenchidos
  if (!title || !description || !startDate || !endDate || !priority) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  // Criação da tarefa (a função que você implementou)
  const result = createTask({ title, description, startDate, endDate, priority });

  // Se houve erro ao criar a tarefa
  if (result.error) {
    return res.status(500).json({ message: 'Erro ao criar a tarefa', error: result.error });
  }

  // Caso tudo ocorra bem
  return res.status(201).json({ message: 'Tarefa criada com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
