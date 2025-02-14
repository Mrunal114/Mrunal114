import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../../shared/button/button.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { MatOption } from '@angular/material/core';
import { TableComponent } from '../../shared/table/table.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { DdComponent } from '../../shared/dd/dd.component';

@Component({
  selector: 'app-divisionmaster',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    InputFieldComponent,
    DropdownComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    PopupmodalComponent,
    InputfieldComponent,
    DdComponent,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    MatIcon,
  ],
  templateUrl: './divisionmaster.component.html',
  styleUrl: './divisionmaster.component.css',
})
export class DivisionmasterComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  statusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  categoryOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Sales Item' },
    { value: '2', viewValue: 'Operational' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'dd',
      label: 'Category',
      options: [
        { value: '0', viewValue: 'Sales Item' },
        { value: '1', viewValue: 'Operational' },
      ],
    },
    {
      type: 'inputfield',
      label: 'Division',
      placeholder: 'Enter Division',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'Description',
      placeholder: 'Enter Description',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'Quote Prefix',
      placeholder: 'Enter Quote Prefix',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'No. Range Series',
      placeholder: 'Enter No. Range Series',
      value: '',
    },
    {
      type: 'dd',
      label: 'Status',
      options: [
        { value: 'Active', viewValue: 'Active' },
        { value: 'Inactive', viewValue: 'Inactive' },
      ],
    },
  ];
  openPopup() {
    this.popupModal.title = 'Division Management';

    this.popupModal.openModal();
  }
}
