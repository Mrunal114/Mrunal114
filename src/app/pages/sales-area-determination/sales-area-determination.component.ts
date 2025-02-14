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
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sales-area-determination',
  imports: [SidebarComponent,HeaderComponent,ButtonComponent,TableComponent,
    PaginatorComponent,DdComponent,CommonModule,PopupmodalComponent,InputfieldComponent,MatIcon],
  templateUrl: './sales-area-determination.component.html',
  styleUrl: './sales-area-determination.component.css'
})
export class SalesAreaDeterminationComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  formFields = [
    { type: 'dd', label: 'Sales Area', options: [
      { value: 'SalesArea-01', viewValue: 'SalesArea-01' },
      { value: 'SalesArea-02', viewValue: 'SalesArea-02' },
    ]}
    ,
    { type: 'rbtn', label: 'Country', options: [
      { value: 'Domestic',rlabel:'Domestic' },
      { value: 'Export' , rlabel:'Export'  },
    ]}
    ,
    { type: 'dd', label: 'Category', options: [
      { value: 'Category-01', viewValue: 'Category-01' },
      { value: 'Category-02', viewValue: 'Category-02' },
    ]}
    ,
    { type: 'dd', label: 'Item Category', options: [
      { value: 'Item Category-01', viewValue: 'Item Category-01' },
      { value: 'Item Category-02', viewValue: 'Item Category-02' },
    ]}
    ,
    { type: 'dd', label: 'Lead Type', options: [
      { value: 'Lead Type-01', viewValue: 'Lead Type-01' },
      { value: 'Lead Type-02', viewValue: 'Lead Type-02' },
    ]}
    ,
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    ,
   ] 
  openPopup() {
    this.popupModal.title = 'Sales Area Determination Management';
    
    
    this.popupModal.openModal();
  }

}
