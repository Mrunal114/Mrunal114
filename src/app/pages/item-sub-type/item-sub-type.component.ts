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
  selector: 'app-item-sub-type',
  imports: [SidebarComponent,HeaderComponent,ButtonComponent,TableComponent,
    PaginatorComponent,DdComponent,CommonModule,PopupmodalComponent,InputfieldComponent,MatIcon],
  templateUrl: './item-sub-type.component.html',
  styleUrl: './item-sub-type.component.css'
})
export class ItemSubTypeComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Item Sub Type', placeholder: 'Enter Item Sub Type', value: '' },
    { type: 'dd', label: 'Item Type', options: [
      { value: 'ItemType-01', viewValue: 'ItemType-01' },
      { value: 'ItemType-02', viewValue: 'ItemType-02' },
    ]},
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    
   ]     
  openPopup() {
    this.popupModal.title = 'Item Sub Type Management';
   
    
    this.popupModal.openModal();
  }

}
