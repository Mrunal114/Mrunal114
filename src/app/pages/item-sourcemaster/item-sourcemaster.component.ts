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
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-item-sourcemaster',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    MatIcon,
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
  ],
  templateUrl: './item-sourcemaster.component.html',
  styleUrl: './item-sourcemaster.component.css',
})
export class ItemSourcemasterComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  channelOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Sales' },
    { value: '2', viewValue: 'Marketing' },
  ];
  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'dd',
      label: 'Channel',
      options: [
        { value: '0', viewValue: 'Sales' },
        { value: '1', viewValue: 'Marketing' },
      ],
    },
    {
      type: 'inputfield',
      label: 'Item Source',
      placeholder: 'Enter Item Source',
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
    this.popupModal.title = 'Item Source Management';

    this.popupModal.openModal();
  }
}
