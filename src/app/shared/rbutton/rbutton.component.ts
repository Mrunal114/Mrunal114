import { Component,Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rbutton',
  imports: [MatButtonModule,FormsModule,CommonModule],
  templateUrl: './rbutton.component.html',
  styleUrl: './rbutton.component.css'
})
export class RbuttonComponent {
  @Input() btnColor:string ='';

  
}
