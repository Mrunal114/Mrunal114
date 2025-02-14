// import {ChangeDetectionStrategy, Component, computed, signal,Input} from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {MatCheckboxModule} from '@angular/material/checkbox';

// export interface Task {
//   name: string;
//   completed: boolean;
//   subtasks?: Task[];
// }

// /**
//  * @title Basic checkboxes
//  */
// @Component({
//   selector: 'app-checkbox',
//   templateUrl: 'checkbox.Component.html',
//   styleUrl: 'checkbox.Component.css',
//   imports: [MatCheckboxModule, FormsModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class CheckboxComponent {
//   readonly task = signal<Task>({
//     name: '',
//     completed: false
//   });

// @Input() name: string =""

//   readonly partiallyComplete = computed(() => {
//     const task = this.task();
//     if (!task.subtasks) {
//       return false;
//     }
//     return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
//   });

//   update(completed: boolean, index?: number) {
//     this.task.update(task => {
//       if (index === undefined) {
//         task.completed = completed;
//         task.subtasks?.forEach(t => (t.completed = completed));
//       } else {
//         task.subtasks![index].completed = completed;
//         task.completed = task.subtasks?.every(t => t.completed) ?? true;
//       }
//       return {...task};
//     });
//   }

// }

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css'],
  imports: [MatCheckboxModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() label: string = ''; // The label for the checkbox
  @Input() checked: boolean = false; // The initial checked state of the checkbox
  @Output() checkedChange = new EventEmitter<boolean>(); // Emit changes to the checked state

  // Method to toggle checkbox and emit the updated state
  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
