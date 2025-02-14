import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from "../../shared/popupmodal/popupmodal.component";
import { MatIcon } from '@angular/material/icon';
import { BusinessdivisionService } from '../../services/businessdivision/businessdivision.service';

@Component({
  selector: 'app-businessdivision',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './businessdivision.component.html',
  styleUrl: './businessdivision.component.css'
})
export class BusinessdivisionComponent {
  constructor(private businessdivisionService:BusinessdivisionService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  formFields = [
    { type: 'inputfield', label: 'Business Division', placeholder: 'Enter Business Division', value: '' },

    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
  openPopup() {
    this.popupModal.title = 'Business Division Management';
   
  
    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let businessdivisionData =  {
        BusinessDivision :data["Business Division"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.businessdivisionService.insertBusinessdivision('InsertCustomerDivision',businessdivisionData).subscribe({

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
