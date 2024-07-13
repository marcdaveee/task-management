import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Output() cancel = new EventEmitter();
  onCancelAddTask() {
    this.cancel.emit();
  }

  @Output() add = new EventEmitter<NewTask>();

  onAddTask() {
    this.add.emit({
      enteredTitle: this.enteredTitle,
      enteredDate: this.enteredDate,
      enteredSummary: this.enteredSummary,
    });
  }
}
