import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { MatOption } from '@angular/material/core';
import { TableComponent } from '../../shared/table/table.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { CategorymasterService } from '../../services/categorymaster/categorymaster.service';
@Component({
  selector: 'app-category',
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
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor(private categorymasterService:CategorymasterService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Category',
      placeholder: 'Enter Category',
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
    {
      type: 'inputfield',
      label: 'Description',
      placeholder: 'Description',
      value: '',
    },
  ];
  openPopup() {
    this.popupModal.title = 'Category Management';

    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let categorymasterata =  {
        Category :data["Category"],
        Description :data["Description"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.categorymasterService.insertCategoryMaster('InsertCategoryMaster',categorymasterata).subscribe({

        next: (response) => {
          console.log('Data submitted successfully:', response);
          alert('Data submitted successfully!');
        },
        error: (error) => {
          console.error('Error submitting data:', error);
          alert('Failed to submit data!');
        },
      })
  }
}
