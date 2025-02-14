import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { DdComponent } from '../../shared/dd/dd.component';

@Component({
  selector: 'app-orgunitsetup',
  imports: [
  MatCardModule,
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
  templateUrl: './orgunitsetup.component.html',
  styleUrl: './orgunitsetup.component.css'
})
export class OrgunitsetupComponent {
@ViewChild('popupModal') popupModal!: PopupmodalComponent;

  formFeilds = [
    {type: 'dd' , label:'Org Name',  options: [
      { value: 'MH1', viewValue: 'MH1' },
      { value: 'MH2', viewValue: 'MH2' },
      { value: 'MH3', viewValue: 'MH3' }
    ] },
    { type: 'inputfield', label: 'Org Unit Code', placeholder: 'Enter Org Unit Code', value: '' },
    { type: 'inputfield', label: 'Org Unit Name', placeholder: 'Org Unit Name ', value: '' },
    {type: 'dd', label:'Status', options:[
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
      { value: 'Pending', viewValue: 'Pending' }
    ]},
    {type: 'dd', label:'Country', options:[
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ]},
    {type: 'dd', label:'Region', options:[
      { value: 'East', viewValue: 'East' },
      { value: 'West', viewValue: 'West' },
      { value: 'North', viewValue: 'North' },
      { value: 'South', viewValue: 'South' }
    ]},
    {type: 'dd', label:'State', options:[
      { value: 'Maharashtra', viewValue: 'Maharashtra' },
      { value: 'Washington DC', viewValue: 'Washington DC' },
      { value: 'Sydney', viewValue: 'Sydney' }
    ]},
    {type: 'dd', label:'District', options:[
      { value: 'Mumbai', viewValue: 'OrgType1' },
      { value: 'Greenwich', viewValue: 'Greenwich' },
      { value: 'Aus', viewValue: 'Aus' }
    ]},
    { type: 'inputfield', label: 'City', placeholder: 'Enter City', value: '' },
    { type: 'inputfield', label: 'Pincode ', placeholder: 'Enter Pincode ', value: '' },
    { type: 'inputfield', label: 'GSTN', placeholder: 'Enter GSTN', value: '' },
    { type: 'inputfield', label: 'CIN', placeholder: 'Enter CIN ', value: '' },
    { type: 'inputfield', label: 'PAN No', placeholder: 'Enter PAN No ', value: '' },
  ]
  openPopup() {
    this.popupModal.title = 'Org Unit';
   
    this.popupModal.openModal();
  }
}
