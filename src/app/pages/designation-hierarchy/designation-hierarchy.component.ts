import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { TableComponent } from '../../shared/table/table.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';

@Component({
  selector: 'app-designation-hierarchy',
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
  templateUrl: './designation-hierarchy.component.html',
  styleUrl: './designation-hierarchy.component.css',
})
export class DesignationHierarchyComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  desgnOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Assistant' },
    { value: '2', viewValue: 'Manager' },
  ];
  selectedDesgn = '';
  formFields = [
    {
      type: 'dd',
      label: 'Designation',
      options: [
        { value: '0', viewValue: 'Assistant' },
        { value: '1', viewValue: 'Manager' },
      ],
    },
    {
      type: 'dd',
      label: 'Report to Designation',
      options: [
        { value: '0', viewValue: 'Manager' },
        { value: '1', viewValue: 'Hr Manager' },
      ],
    },
    {
      type: 'dd',
      label: 'Status',
      options: [
        { value: '0', viewValue: 'Active' },
        { value: '1', viewValue: 'Inactive' },
      ],
    },
  ];
  openPopup() {
    this.popupModal.title = 'Designation Hierarchy';

    this.popupModal.openModal();
  }
}
