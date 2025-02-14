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
import { RolemasterService } from '../../services/rolemaster/rolemaster.service';

@Component({
  selector: 'app-rolemanagement',
  imports: [SidebarComponent, HeaderComponent,InputfieldComponent,SubdropdownComponent,
    ButtonComponent,TableComponent,PopupmodalComponent,DdComponent,MatIcon],
  templateUrl: './rolemanagement.component.html',
  styleUrl: './rolemanagement.component.css'
})
export class RoleManagementComponent {
  constructor(private rolemasterService:RolemasterService){}
   @ViewChild('popupModal') popupModal!: PopupmodalComponent;
     statusOptions = [
      { value:'Select', viewValue:'Select' },
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
      
    ];
    selectedStatus = '';
     formFields = [
      { type: 'inputfield', label: 'Title', placeholder: 'Title', value: '' },
      { type: 'dd', label: 'Status', options: [
        { value: 'Active', viewValue: 'Active' },
        { value: 'Inactive', viewValue: 'Inactive' },
      ]}
      
     ]
      openPopup() {
        this.popupModal.title = 'Role Management';
        
        this.popupModal.openModal();
      }
    
      handleFormSubmit(data: any) {

        let rolemasterData =  {
            Title :data["Title"],
            UserID : "1363",
            Status : data["Status"],
            Mode : "1",
            OrgCode : "1102",
        }
    
        
          this.rolemasterService.insertRoleMaster('InsertRoleMaster',rolemasterData).subscribe({
    
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
