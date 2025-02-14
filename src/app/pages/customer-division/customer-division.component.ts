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
import { CustomerDivisionService } from '../../services/CustomerDivision/customer-division.service';


@Component({
  selector: 'app-customer-division',
  imports: [SidebarComponent, MatIcon, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent],
  templateUrl: './Customer-Division.component.html',
  styleUrl: './Customer-Division.component.css'
})
export class CustomerDivisionComponent {
  constructor(private customerdivisionservice:CustomerDivisionService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  tableHeaders = [
    { key: 'CustomerDivision', label: 'Customer Division' },
    { key: 'Description', label: 'Description' },
    { key: 'IsActive', label: 'Status' },
    { key: 'Action', label: 'Action' },
  ];

   tableData: any[] = [];
  
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];

  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Customer Division', placeholder: 'Search by Customer Division', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
   
  ];
  openPopup() {
    this.popupModal.title = ' Customer Division Management';
    
    this.popupModal.openModal();
  }

  getCustomerDivisionLists(){
    let searchTxt = '';
    let statusTxt = '';
    let orgCode = '';
  
    let params = {
      SearchText: searchTxt,
      Status: statusTxt,
      OrgCode: statusTxt
    };
  
    this.customerdivisionservice.getCustomerDivision('CustomerDivisionList', params).subscribe({
      next: (response) => {
        console.log('Data get successfully:', response);
        this.tableData = (response?.Result || []).map((row: any) => ({
          ...row,
          IsActive: row.IsActive ? 'Active' : 'Inactive',
        }));
      },
      error: (error) => {
        console.error('Error get data:', error);
        alert('Failed to get data!');
      },
    });
  }

  handleFormSubmit(data: any) {

    let  customerdivisiondata =  {
        CustomerDivision :data["CustomerDivision"],
        Description :data["Description"],
        UserID : "1111",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1105",
    }

    
      this.customerdivisionservice.insertCustomerDivision('InsertCustomerDivision',customerdivisiondata).subscribe({

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
  editRow(row: any) {
    console.log('Editing row:', row);
  
    // Fetch additional details for the selected plant if required (optional)
    this.customerdivisionservice.getCustomerDivision('FillCustomerDivision', { CustomerDivision: row.CustomerDivision }).subscribe({
      next: (response) => {
        const CustomerDivisionDetails = response?.Result || row;
  
        // Map the details to form fields
        this.formFields.forEach((field) => {
          if (field.type === 'dd' && field.label === 'Status') {
            field.value = CustomerDivisionDetails.IsActive ? 'Active' : 'Inactive';
          } else {
            field.value = CustomerDivisionDetails[field.label] || '';
          }
        });

        this.formFields.push({ type: "hidden", label: "Customer Division", options:[], value: CustomerDivisionDetails.CustomerDivision });
  
        // Set the modal title for editing and open the modal
        this.popupModal.title = 'Edit Customer Division';
        this.popupModal.openModal();
      },
      error: (error) => {
        console.error('Error fetching customer division details:', error);
        alert('Failed to fetch customer division details!');
      },
    });
  }

  resetForm() {
    // Reset form field values to default
    this.formFields.forEach((field) => {
      field.value = '';
    });
  }
}

