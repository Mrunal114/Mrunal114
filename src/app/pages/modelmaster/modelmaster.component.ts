import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-modelmaster',
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
  templateUrl: './modelmaster.component.html',
  styleUrl: './modelmaster.component.css',
})
export class ModelmasterComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'InActive' },
  ];

  selectedStatus = '';

  formFields = [
    {
      type: 'dd',
      label: 'Division',
      options: [
        { value: '0', viewValue: 'Sales Area' },
        { value: '1', viewValue: 'Retail' },
      ],
    },
    {
      type: 'inputfield',
      label: 'Item Code',
      placeholder: 'Enter Item Code',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'Item Description',
      placeholder: 'Enter Item Description',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'Model',
      placeholder: 'Enter Model',
      value: '',
    },
    {
      type: 'dd',
      label: 'Lead Type',
      options: [
        { value: '0', viewValue: 'ABC Infra' },
        { value: '1', viewValue: 'ACE' },
      ],
    },
    {
      type: 'inputfield',
      label: 'Sytem Model ID',
      placeholder: 'Enter Sytem Model ID',
      value: '',
    },
    {
      type: 'inputfield',
      label: 'Estimated Value',
      placeholder: 'Enter Estimated Value',
      value: '',
    },
    {
      type: 'dd',
      label: 'Eligible For Quotation',
      options: [
        { value: '0', viewValue: 'Fabrication' },
        { value: '1', viewValue: 'Test' },
      ],
    },
    {
      type: 'dd',
      label: 'Status',
      options: [
        { value: '0', viewValue: 'Active' },
        { value: '1', viewValue: 'InActive' },
      ],
    },
  ];
  openPopup() {
    this.popupModal.title = 'Model Management';

    this.popupModal.openModal();
  }
}
