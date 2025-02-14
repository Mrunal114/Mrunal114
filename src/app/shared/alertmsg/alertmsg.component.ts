import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-alertmsg',
  imports: [CommonModule,],
  templateUrl: './alertmsg.component.html',
  styleUrl: './alertmsg.component.css'
})
export class AlertmsgComponent {
  @Input() msg: string='';
  @Input() alertType : string ='';
}
