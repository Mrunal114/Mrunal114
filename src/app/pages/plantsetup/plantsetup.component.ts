import { Component,ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { TableComponent } from '../../shared/table/table.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { MatIcon } from '@angular/material/icon';
import { PlantService } from '../../services/plant/plant.service';
@Component({
  selector: 'app-plantsetup',
  imports: [SidebarComponent, HeaderComponent,InputfieldComponent,SubdropdownComponent
    ,ButtonComponent,TableComponent,PopupmodalComponent,DdComponent,MatIcon],
  templateUrl: './plantsetup.component.html',
  styleUrl: './plantsetup.component.css'
})
export class PlantsetupComponent {
  constructor(private plantService:PlantService){
   
  }
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  tableHeaders = [
    { key: 'Plant', label: 'Plant' },
    { key: 'Description', label: 'Description' },
    { key: 'IsActive', label: 'Status' },
    { key: 'Action', label: 'Action' },
  ];

   tableData: any[] = [];
  
  statusOptions = [
   { value:'Select', viewValue:'Select' },
   { value: 'Active', viewValue: 'Active' },
   { value: 'Inactive', viewValue: 'Inactive' },
   
 ];
 selectedStatus = '';
  formFields = [
   { type: 'inputfield', label: 'Plant', placeholder: 'Enter Plant', value: '' },
   { type: 'dd', label: 'Status', options: [
     { value: 'Active', viewValue: 'Active' },
     { value: 'Inactive', viewValue: 'Inactive' },
   ]},
   { type: 'inputfield', label: 'Description', placeholder: 'Enter Description', value: '' },
   
  ]
   openPopup() {
     this.popupModal.title = 'Plant Management';
     this.resetForm()
     this.popupModal.openModal();
   }
 
   getPlantLists(){
    let searchTxt = '';
    let statusTxt = '';
    let orgCode = '';
  
    let params = {
      SearchText: searchTxt,
      Status: statusTxt,
      OrgCode: statusTxt
    };
  
    this.plantService.getPlant('PlantList', params).subscribe({
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

    let plantData =  {
      PlantID: data["PlantID"] || 0,
        Plant :data["Plant"],
        Description :data["Description"],
        UserID : "1434",
        Status : data["Status"] === "Active" ? 1 : 0,
        Mode : data["PlantID"] ? "0" : "1",
        OrgCode : "1107",
    }
   

    
      this.plantService.insertPlant('InsertPlant',plantData).subscribe({
         
        next: (response) => {
          console.log('Data submitted successfully:', response);
          alert('Data submitted successfully!');
          this.getPlantLists(); // Refresh the list to show updated data
      this.popupModal.closeModal();
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
    this.plantService.getPlant('FillPlantList', { PlantID: row.PlantID }).subscribe({
      next: (response) => {
        const plantDetails = response?.Result || row;
  
        // Map the details to form fields
        this.formFields.forEach((field) => {
          if (field.type === 'dd' && field.label === 'Status') {
            field.value = plantDetails.IsActive ? 'Active' : 'Inactive';
          } else {
            field.value = plantDetails[field.label] || '';
          }
        });

        this.formFields.push({ type: "hidden", label: "PlantID", options:[], value: plantDetails.PlantID });
  
        // Set the modal title for editing and open the modal
        this.popupModal.title = 'Edit Plant';
        this.popupModal.openModal();
      },
      error: (error) => {
        console.error('Error fetching plant details:', error);
        alert('Failed to fetch plant details!');
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
