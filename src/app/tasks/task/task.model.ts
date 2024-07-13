export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

export interface NewTask {
  enteredTitle: string;
  enteredSummary: string;
  enteredDate: string;
}
