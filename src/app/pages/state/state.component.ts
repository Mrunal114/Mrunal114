import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';

@Component({
  selector: 'app-state',
  imports: [MatCardModule,
          ButtonComponent,
          PaginatorComponent,
          InputfieldComponent,
          MatOption,
          TableComponent,
          SidebarComponent,
          HeaderComponent,
      
          MatButtonModule,
          MatIconModule,
          DialogComponent,
          PopupmodalComponent,
          DdComponent,],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
@ViewChild('popupModal') popupModal!: PopupmodalComponent;

  formFields = [
    { type: 'dd', label: 'Country', options: [
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'inputfield', label: 'State', placeholder: 'Enter State', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
  openPopup() {
    this.popupModal.title = 'State Management';
  
    this.popupModal.openModal();
  }
}
