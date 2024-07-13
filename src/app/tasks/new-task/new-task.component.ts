import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private _tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this._tasksService = tasksService;
  }

  @Output() close = new EventEmitter();
  onCloseAddTask() {
    this.close.emit();
  }

  @Output() add = new EventEmitter<NewTask>();

  onAddTask() {
    const newTask: NewTask = {
      enteredTitle: this.enteredTitle,
      enteredDate: this.enteredDate,
      enteredSummary: this.enteredSummary,
    };
    this._tasksService.addTask(newTask, this.userId);
    this.onCloseAddTask();
  }
}
