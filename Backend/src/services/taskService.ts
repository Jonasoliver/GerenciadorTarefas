import Realm from 'realm';
import { TaskSchema } from '../models/taskmodel';

// Inicializando o banco de dados Realm
const realm = new Realm({ schema: [TaskSchema], schemaVersion: 1 });

// Função para criar uma nova tarefa
export const createTask = (taskData: { title: string; description: string; startDate: string; endDate: string; priority: string }) => {
  try {
    const id = realm.objects("Task").length + 1;  // Definir um ID único
    realm.write(() => {
      const newTask = realm.create("Task", { id, ...taskData });
      return newTask;
    });
    return { message: "Tarefa criada com sucesso!" };
  } catch (error) {
    return { message: "Erro ao criar a tarefa", error };
  }
};
