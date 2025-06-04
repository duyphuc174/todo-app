import { Task } from '../models/task.model';

export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export const TASK_LIST: Task[] = [
  {
    id: 1,
    title: 'Hoàn thành báo cáo tuần',
    dueDate: new Date(),
    status: TaskStatus.PENDING,
  },
  {
    id: 2,
    title: 'Dọn dẹp hộp thư đến',
    dueDate: new Date(),
    status: TaskStatus.PENDING,
  },
  {
    id: 3,
    title: 'Chuẩn bị thuyết trình',
    dueDate: new Date(Date.now() + 2 * 86400000),
    status: TaskStatus.PENDING,
  },
  {
    id: 4,
    title: 'Mua sắm nhu yếu phẩm',
    dueDate: new Date(Date.now() + 3 * 86400000),
    status: TaskStatus.PENDING,
  },
  {
    id: 5,
    title: 'Xem lại kế hoạch tháng',
    dueDate: new Date(Date.now() - 2 * 86400000),
    status: TaskStatus.COMPLETED,
  },
  {
    id: 6,
    title: 'Làm bài tập React',
    dueDate: new Date(Date.now() - 1 * 86400000),
    status: TaskStatus.COMPLETED,
  },
  {
    id: 7,
    title: 'Gọi điện cho khách hàng A',
    dueDate: new Date(),
    status: TaskStatus.PENDING,
  },
  {
    id: 8,
    title: 'Đặt vé máy bay',
    dueDate: new Date(Date.now() + 5 * 86400000),
    status: TaskStatus.PENDING,
  },
  {
    id: 9,
    title: 'Tổng hợp feedback từ team',
    dueDate: new Date(),
    status: TaskStatus.PENDING,
  },
  {
    id: 10,
    title: 'Cập nhật CV cá nhân',
    dueDate: new Date(Date.now() - 5 * 86400000),
    status: TaskStatus.COMPLETED,
  },
];
