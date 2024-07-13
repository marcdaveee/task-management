import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;

  isAddingTask = false;

  tasks = dummyTasks;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  setTaskCompleted(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(newTask: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.enteredTitle,
      dueDate: newTask.enteredDate,
      summary: newTask.enteredSummary,
    });

    this.isAddingTask = false;
  }
}
