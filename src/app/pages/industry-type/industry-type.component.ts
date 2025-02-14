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
import { IndustryTypeService } from '../../services/IndustryType/industry-type.service';

@Component({
  selector: 'app-industry-type',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent, MatIcon],
  templateUrl: './Industry-Type.component.html',
  styleUrl: './Industry-Type.component.css'
})
export class IndustryTypeComponent {
  constructor(private industrytypeservice:IndustryTypeService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  tableHeaders = [
    { key: 'IndustryType', label: 'IndustryType' },
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
    { type: 'inputfield', label: 'Industry Type', placeholder: 'Search by Industry Type', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
    { type: 'inputfield', label: 'Description', placeholder: ' Enter the description', value: '' },
  ];
  openPopup() {
    this.popupModal.title = 'Industry Type Management';
 
    this.popupModal.openModal();
  }

  getIndustryTypeLists(){
    let searchTxt = '';
    let statusTxt = '';
    let orgCode = '';
  
    let params = {
      SearchText: searchTxt,
      Status: statusTxt,
      OrgCode: statusTxt
    };
  
    this.industrytypeservice.getIndustryType('IndustryTypeList', params).subscribe({
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

    let  industrytypedata =  {
        Industrytype :data["IndustryType"],
        Description :data["Description"],
        UserID : "1111",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1105",
    }

    
      this.industrytypeservice.insertIndustryType('InsertIndustrytype',industrytypedata).subscribe({

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
    this.industrytypeservice.getIndustryType('FillIndustrytype', { IndustryType: row.IndustryType }).subscribe({
      next: (response) => {
        const IndustryTypeDetails = response?.Result || row;
  
        // Map the details to form fields
        this.formFields.forEach((field) => {
          if (field.type === 'dd' && field.label === 'Status') {
            field.value = IndustryTypeDetails.IsActive ? 'Active' : 'Inactive';
          } else {
            field.value = IndustryTypeDetails[field.label] || '';
          }
        });

        this.formFields.push({ type: "hidden", label: "IndustryType", options:[], value: IndustryTypeDetails.IndustryType });
  
        // Set the modal title for editing and open the modal
        this.popupModal.title = 'Edit Industry-Type';
        this.popupModal.openModal();
      },
      error: (error) => {
        console.error('Error fetching industry type details:', error);
        alert('Failed to fetch industry type details!');
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
