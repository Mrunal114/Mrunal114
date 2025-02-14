import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { MatOption } from '@angular/material/core';
import { TableComponent } from '../../shared/table/table.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DatepickerComponent } from '../../shared/datepicker/datepicker.component';

@Component({
  selector: 'app-competitordata',
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
    InputfieldComponent,
    DdComponent,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    DatepickerComponent,
    MatIcon,
  ],
  templateUrl: './competitordata.component.html',
  styleUrl: './competitordata.component.css',
})
export class CompetitordataComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  compdataOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'ABC' },
    { value: '2', viewValue: 'ACE' },
  ];
  itemOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'ABC' },
    { value: '2', viewValue: 'ACE' },
  ];
  modelOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'ABC' },
    { value: '2', viewValue: 'ACE' },
  ];
  selectedCompData = '';
  selectedItem = '';
  selectedModel = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Customer Name',
      placeholder: 'Enter Customer Name',
      value: '',
    },
    {
      type: 'dd',
      label: 'Competitor Name',
      options: [
        { value: '0', viewValue: 'ABC Infra' },
        { value: '1', viewValue: 'ACE' },
      ],
    },
    {
      type: 'dd',
      label: 'Product Family',
      options: [
        { value: '0', viewValue: 'Fabrication' },
        { value: '1', viewValue: 'Test' },
      ],
    },
    {
      type: 'dd',
      label: 'Model',
      options: [
        { value: '0', viewValue: 'GW200' },
        { value: '1', viewValue: 'ABC2' },
      ],
    },
    {
      type: 'datepicker',
      label: 'Year of Manufacture',
    },
    {
      type: 'inputfield',
      label: 'Quantity',
      placeholder: 'Quantity',
      value: '',
    },
    {
      type: 'dd',
      label: 'Type',
      options: [
        { value: '0', viewValue: 'New' },
        { value: '1', viewValue: 'Rental' },
        { value: '2', viewValue: 'Used' },
      ],
    },
  ];
  openPopup() {
    this.popupModal.title = 'Competitor Data';

    this.popupModal.openModal();
  }
}
