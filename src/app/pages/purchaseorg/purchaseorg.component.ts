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
  selector: 'app-purchaseorg',
  imports: [SidebarComponent, HeaderComponent,InputfieldComponent,SubdropdownComponent,
    ButtonComponent,TableComponent,PopupmodalComponent,DdComponent,MatIcon],
  templateUrl: './purchaseorg.component.html',
  styleUrl: './purchaseorg.component.css'
})
export class PurchaseorgComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
   { value:'Select', viewValue:'Select' },
   { value: 'Active', viewValue: 'Active' },
   { value: 'Inactive', viewValue: 'Inactive' },
   
 ];
 selectedStatus = '';
  formFields = [
   { type: 'inputfield', label: 'Purchase Org', placeholder: 'Enter Purchase Org', value: '' },
   { type: 'dd', label: 'Status', options: [
     { value: 'Active', viewValue: 'Active' },
     { value: 'Inactive', viewValue: 'Inactive' },
   ]},
   { type: 'inputfield', label: 'Description', placeholder: 'Enter Description', value: '' },
   
  ]
   openPopup() {
     this.popupModal.title = 'Purchase Org';
     
     this.popupModal.openModal();
   }
 

}
