import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { NewTask } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  getTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskToAdd: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskToAdd.enteredTitle,
      dueDate: taskToAdd.enteredDate,
      summary: taskToAdd.enteredSummary,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
