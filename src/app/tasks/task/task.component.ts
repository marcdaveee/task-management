import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private _tasksService;
  constructor(tasksService: TasksService) {
    this._tasksService = tasksService;
  }

  @Input({ required: true }) task!: Task;

  onCompleteTask() {
    this._tasksService.removeTask(this.task.id);
  }
}
