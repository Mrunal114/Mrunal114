import { Component, input, ViewChild } from '@angular/core';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TableComponent } from '../../shared/table/table.component';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { DesignationMasterService } from '../../services/designationMaster/designation-master.service';

@Component({
  selector: 'app-designation-master',
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
  templateUrl: './designation-master.component.html',
  styleUrl: './designation-master.component.css',
})
export class DesignationMasterComponent {
  constructor(private designationMasterService:DesignationMasterService){}
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
      label: 'Designation Name',
      placeholder: 'Enter Designation Name',
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
    this.popupModal.title = 'Designation Management';

    this.popupModal.openModal();
  }

  
  handleFormSubmit(data: any) {

    let designationMasterData =  {
        FOP :data["Designation Name"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.designationMasterService.insertDesignationMaster('InsertDesignationMaster',designationMasterData).subscribe({

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
