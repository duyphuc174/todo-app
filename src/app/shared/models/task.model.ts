import { TaskStatus } from '../constants/task.constant';

export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: Date;
  status: TaskStatus;
}

export interface TaskBody {
  title: string;
  description?: string;
  dueDate: Date;
  status: TaskStatus;
}
