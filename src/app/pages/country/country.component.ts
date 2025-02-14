import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { CountryService } from '../../services/country/country.service';


@Component({
  selector: 'app-country',
  imports: [
    MatCardModule,
        ButtonComponent,
        PaginatorComponent,
       
        DropdownComponent,
        MatOption,
        TableComponent,
        SidebarComponent,
        HeaderComponent,
    
        MatButtonModule,
        MatIconModule,
        DialogComponent,
        DdComponent,
        CommonModule,
        InputfieldComponent,
        PopupmodalComponent
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
   constructor(private countryService:CountryService){}
@ViewChild('popupModal') popupModal!: PopupmodalComponent;
  formFields = [

      { type: 'inputfield', label: 'Country', placeholder: 'Enter Country', value: '' },
      { type: 'dd', label: 'Status', options: [
        { value: 'Active', viewValue: 'Active' },
        { value: 'Inactive', viewValue: 'Inactive' },
      ] },
  ]
  openPopup() {
    this.popupModal.title = 'Country Management';

    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let countryData =  {
        Country :data["Country"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.countryService.insertCountry('InsertCountry',countryData).subscribe({

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
