import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { MatDialog } from '@angular/material/dialog';

import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { RegionService } from '../../services/region/region.service';


@Component({
  selector: 'app-region',
  imports: [MatCardModule,
          ButtonComponent,
          PaginatorComponent,
          InputfieldComponent,
          MatOption,
          TableComponent,
          SidebarComponent,
          HeaderComponent,
      
          MatButtonModule,
          MatIconModule,
          DialogComponent,
          PopupmodalComponent,
          DdComponent
           ],
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent {
  constructor(private regionService:RegionService){}
@ViewChild('popupModal') popupModal!: PopupmodalComponent;

  formFeilds = [
    { type: 'inputfield', label: 'Region', placeholder: 'Enter region', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
  openPopup() {
    this.popupModal.title = 'Region Management';
  
    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let regionData =  {
        Region :data["Region"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.regionService.insertRegion('InsertRegionMaster',regionData).subscribe({

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
