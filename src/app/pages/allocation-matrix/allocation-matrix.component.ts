import { Component ,ViewChild} from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TableComponent } from '../../shared/table/table.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { CommonModule } from '@angular/common';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { RadioButtonComponent } from '../../shared/radio-button/radio-button.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-allocation-matrix',
  imports: [SidebarComponent,HeaderComponent,ButtonComponent,TableComponent,PaginatorComponent,
    RadioButtonComponent,DdComponent,CommonModule,PopupmodalComponent,InputfieldComponent,MatIcon],
  templateUrl: './allocation-matrix.component.html',
  styleUrl: './allocation-matrix.component.css'
})
export class AllocationMatrixComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
   { value:'Select', viewValue:'Select' },
   { value: 'Active', viewValue: 'Active' },
   { value: 'Inactive', viewValue: 'Inactive' },
   
 ];
 selectedStatus = '';
 DivisionOptions= [
  { value:'Division-001', viewValue:'Division-001' },
  { value: 'Division-002', viewValue: 'Division-002' },
  { value: 'Division-003', viewValue: 'Division-003' },

];
selectedDiv='';
regionOptions = [
  { value: 'North', viewValue: 'North' },
    { value: 'South', viewValue: 'South' },
    { value: 'East', viewValue: 'East' }
  
];
selectedRegion = '';
stateOptions = [
  { value: 'Maharashtra', viewValue: 'Maharashtra' },
  { value: 'Greenwood', viewValue: 'Greenwood' },
  { value: 'Sydney', viewValue: 'Sydney' }
  
];
selectedState = '';
districtOptions = [
  { value: 'Mumbai', viewValue: 'Mumbai' },
    { value: 'LA', viewValue: 'LA' },
    { value: 'Northern Sydney', viewValue: 'Northern Sydney' }
  
];
selectedDistrict = '';
categoryOptions = [
  { value: 'Category-01', viewValue: 'Category-01' },
  { value: 'Category-02', viewValue: 'Category-02' },
  { value: 'Category-03', viewValue: 'Category-03' }
];
selectedCategory = '';
leadTypeOptions = [
  { value: 'LT-001', viewValue: 'LT-001' },
  { value: 'LT-002', viewValue: 'LT-002' },
  { value: 'LT-003', viewValue: 'LT-003' }
];
selectedLeadType = '';
 formFields = [
  { type: 'inputfield', label: 'User', placeholder: 'Enter Username', value: '' },
  { type: 'dd', label: 'Lead Type', options: [
    { value: 'LT-001', viewValue: 'LT-001' },
    { value: 'LT-002', viewValue: 'LT-002' },
    { value: 'LT-003', viewValue: 'LT-003' }
  ]}
  ,
  { type: 'dd', label: 'Category', options: [
    { value: 'Category-01', viewValue: 'Category-01' },
  { value: 'Category-02', viewValue: 'Category-02' },
  { value: 'Category-03', viewValue: 'Category-03' }
  ]}
  ,
  { type: 'dd', label: 'Division', options: [
    { value:'Division-001', viewValue:'Division-001' },
    { value: 'Division-002', viewValue: 'Division-002' },
    { value: 'Division-003', viewValue: 'Division-003' },
  ]}
  ,
  { type: 'inputfield', label: 'Item Code', placeholder: 'Enter Item Code', value: '' },
  { type: 'inputfield', label: 'Item Description', placeholder: 'Enter Item Type', value: '' },
  { type: 'dd', label: 'Country', options: [
    { value: 'India', viewValue: 'India' },
 
  ]}
  ,
  { type: 'dd', label: 'Region', options: [
    { value: 'North', viewValue: 'North' },
    { value: 'South', viewValue: 'South' },
    { value: 'East', viewValue: 'East' }
  ]}
  ,
  { type: 'dd', label: 'State', options: [
    { value: 'Maharashtra', viewValue: 'Maharashtra' },
  { value: 'Greenwood', viewValue: 'Greenwood' },
  { value: 'Sydney', viewValue: 'Sydney' }
  ]}
  ,
  { type: 'dd', label: 'District', options: [
    { value: 'Mumbai', viewValue: 'Mumbai' },
    { value: 'LA', viewValue: 'LA' },
    { value: 'Northern Sydney', viewValue: 'Northern Sydney' }
  ]}
  ,
  { type: 'dd', label: 'Status', options: [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ]}

 ];

 openPopup() {
  this.popupModal.title = 'Allocation Matrix';
  
  this.popupModal.openModal();
}
}
