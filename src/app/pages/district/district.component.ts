import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-district',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    InputfieldComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    MatIcon,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    PopupmodalComponent,
    DdComponent,
  ],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css',
})
export class DistrictComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  statusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'InActive' },
  ];

  selectedStatus = '';
  stateOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Maharashtra' },
    { value: '2', viewValue: 'Gujurat' },
  ];

  selectedState = '';
  formFields = [
    {
      type: 'dd',
      label: 'State',
      options: [
        { value: '0', viewValue: 'Maharashtra' },
        { value: '1', viewValue: 'Gujurat' },
      ],
    },
    {
      type: 'inputfield',
      label: 'District',
      placeholder: 'Enter District',
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
    this.popupModal.title = 'Disrict Management';

    this.popupModal.openModal();
  }
}
