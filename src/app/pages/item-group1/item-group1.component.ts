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
  selector: 'app-item-group1',
  imports: [SidebarComponent,HeaderComponent,ButtonComponent,TableComponent,
    PaginatorComponent,DdComponent,CommonModule,PopupmodalComponent,InputfieldComponent,MatIcon],
  templateUrl: './item-group1.component.html',
  styleUrl: './item-group1.component.css'
})
export class ItemGroup1Component {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Item Group 1', placeholder: 'Enter Item Group 1', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    ,
    { type: 'inputfield', label: 'Description', placeholder: 'Description', value: '' },
   ] 
  openPopup() {
    this.popupModal.title = 'Item Group1 Management';
    
    
    this.popupModal.openModal();
  }

}
