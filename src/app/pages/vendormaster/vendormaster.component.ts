import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { CategorymasterService } from '../../services/categorymaster/categorymaster.service';
import { VendormasterService } from '../../services/vendormaster/vendormaster.service';

@Component({
  selector: 'app-vendormaster',
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
  templateUrl: './vendormaster.component.html',
  styleUrl: './vendormaster.component.css',
})
export class VendormasterComponent {
  constructor(private vendormasterService:VendormasterService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: '0', viewValue: 'Select' },
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Vendor Master',
      placeholder: 'Enter Vendor Master',
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
      placeholder: 'Enter Description',
      value: '',
    },
  ];
  openPopup() {
    this.popupModal.title = 'Vendor Management';

    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let vendormasterData =  {
        VendorMaster :data["Vendor Master"],
        Description :data["Description"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.vendormasterService.insertVendorMaster('InsertVendorMaster',vendormasterData).subscribe({

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
