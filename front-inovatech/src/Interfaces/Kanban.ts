export interface ILabel {
  color: string;
  text: string;
}

export interface ITask {
  id: number;
  completed: boolean;
  text: string;
}

export interface ICard {
  id: number;
  title: string;
  labels: ILabel[];
  date: string;
  tasks: ITask[];
  desc?: string;
}

export interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}

export interface IUser {
  email: string;
  name: string;
}

export interface TaskAssignmentFieldProps {
  taskId: string;
  users: IUser[]; 
  onAssign: (taskId: string, userEmail: string) => void; 
}

export interface ITaskAssignment {
  tasks: ITask[];
  users: IUser[]
}