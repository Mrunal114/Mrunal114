import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent {
  @Input() label!: string;
  @Input() customclasses!: string;
  @Input() datepickerstyle!: string;
}
