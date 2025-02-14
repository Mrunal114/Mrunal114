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

@Component({
  selector: 'app-buyercode',
  imports: [SidebarComponent, HeaderComponent,InputfieldComponent,SubdropdownComponent,ButtonComponent,TableComponent,
    PopupmodalComponent,DdComponent,MatIcon],
  templateUrl: './buyercode.component.html',
  styleUrl: './buyercode.component.css'
})
export class BuyercodeComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
   { value:'Select', viewValue:'Select' },
   { value: 'Active', viewValue: 'Active' },
   { value: 'Inactive', viewValue: 'Inactive' },
   
 ];
 selectedStatus = '';
  formFields = [
   { type: 'inputfield', label: 'Buyer Code', placeholder: 'Enter Buyer Code', value: '' },
   { type: 'dd', label: 'Status', options: [
     { value: 'Active', viewValue: 'Active' },
     { value: 'Inactive', viewValue: 'Inactive' },
   ]},
   { type: 'inputfield', label: 'Description', placeholder: 'Enter Description', value: '' },
   
  ]
   openPopup() {
     this.popupModal.title = 'Buyer Code Management';
     
     this.popupModal.openModal();
   }
 

}
