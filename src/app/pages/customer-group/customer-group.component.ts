import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { MatIcon } from '@angular/material/icon';
import { CustgroupService } from '../../services/custgroup/custgroup.service';

@Component({
  selector: 'app-customer-group',
  imports: [SidebarComponent, HeaderComponent, MatIcon, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent],
  templateUrl: './Customer-Group.component.html',
  styleUrl: './Customer-Group.component.css'
})
export class CustomerGroupComponent {
  constructor(private custgroupService:CustgroupService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];

  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Customer Group Name', placeholder: 'Search by Customer Group Name', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
    { type: 'inputfield', label: 'Description', placeholder: 'Enter the description', value: '' },
   
  ];
  openPopup() {
    this.popupModal.title = ' Customer Group Management';
   
    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let custgroupData =  {
        CustGroupName :data["Customer Group Name"],
        Description :data["Description"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.custgroupService.insertCustGroup('InsertCustomerGroup',custgroupData).subscribe({

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