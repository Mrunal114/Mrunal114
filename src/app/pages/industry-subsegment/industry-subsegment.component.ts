import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-industry-subsegment',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    DropdownComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    PopupmodalComponent,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    DdComponent,
    InputfieldComponent,
    MatIcon,
  ],
  templateUrl: './industry-subsegment.component.html',
  styleUrl: './industry-subsegment.component.css',
})
export class IndustrySubsegmentComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  indusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Banking' },
    { value: '2', viewValue: 'Accounts' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Industry Sub Segment',
      placeholder: 'Enter  Industry Sub Segment',
      value: '',
    },
    {
      type: 'dd',
      label: 'Industry Segment',
      options: [
        { value: '0', viewValue: 'Banking' },
        { value: '1', viewValue: 'Accounts' },
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
    this.popupModal.title = 'Industry Sub Segment Management';

    this.popupModal.openModal();
  }
}
