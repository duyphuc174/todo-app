import { TaskStatus } from '../constants/task.constant';

export interface Task {
  id: number;
  title: string;
  dueDate: Date;
  status: TaskStatus;
}
