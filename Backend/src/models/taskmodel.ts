import Realm from 'realm';

// Definir o modelo de dados para a Tarefa
export class Task {
  public id: number;
  public title: string;
  public description: string;
  public startDate: string;
  public endDate: string;
  public priority: string;

  constructor(id: number, title: string, description: string, startDate: string, endDate: string, priority: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
  }
}

// Definir o esquema do banco de dados Realm
export const TaskSchema = {
  name: "Task",
  properties: {
    id: "int",
    title: "string",
    description: "string",
    startDate: "string",
    endDate: "string",
    priority: "string",
  },
  primaryKey: "id",
};
