import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { DdComponent } from '../../shared/dd/dd.component';

@Component({
  selector: 'app-state-region',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    InputfieldComponent,
    DdComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    MatIcon,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    PopupmodalComponent,
  ],
  templateUrl: './state-region.component.html',
  styleUrl: './state-region.component.css',
})
export class StateRegionComponent {
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
      label: 'Region',
      options: [
        { value: '0', viewValue: 'East' },
        { value: '1', viewValue: 'West' },
      ],
    },
    {
      type: 'dd',
      label: 'State',
      options: [
        { value: '0', viewValue: 'Maharashtra' },
        { value: '1', viewValue: 'Gujurat' },
      ],
    },
    {
      type: 'dd',
      label: 'District',
      options: [
        { value: '0', viewValue: 'Pune' },
        { value: '1', viewValue: 'Raigad' },
      ],
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
    this.popupModal.title = 'State-Region Management';

    this.popupModal.openModal();
  }
}
