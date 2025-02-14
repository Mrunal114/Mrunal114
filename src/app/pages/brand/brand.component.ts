import { Component,ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { AlertmsgComponent } from '../../shared/alertmsg/alertmsg.component';
import { SelectFieldComponent } from '../../shared/select-field/select-field.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { RbuttonComponent } from '../../shared/rbutton/rbutton.component';
import { TableComponent } from '../../shared/table/table.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardcomponentComponent } from '../../shared/cardcomponent/cardcomponent.component';
import { MatCardModule } from '@angular/material/card';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-brand',
  imports: [
  //   ButtonComponent,
  //   AlertmsgComponent,
  //   SelectFieldComponent,
  //  InputFieldComponent,
  //   MatInputModule,
  //   MatLabel,
  //   RbuttonComponent,
  //   TableComponent,
  //   PaginatorComponent,
  //   SidebarComponent,
  //   HeaderComponent,
  //   CardcomponentComponent,
  //   MatCardModule,
  //   CommonModule,
  //  DropdownComponent,
  //  DdComponent,
  //  InputfieldComponent
  TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, 
  PopupmodalComponent,ButtonComponent,SidebarComponent,HeaderComponent,MatIcon

    
    
  ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
   @ViewChild('popupModal') popupModal!: PopupmodalComponent;
   statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
   formFields = [
    { type: 'inputfield', label: 'Brand Code', placeholder: 'Enter Brand Code', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    ,
    { type: 'inputfield', label: 'Description', placeholder: 'Description', value: '' },
   ]
    openPopup() {
      this.popupModal.title = 'Brand Master';
      
      this.popupModal.openModal();
    }
  constructor(private router:Router){
   
  }
 
  onBrand(){
   
    this.router.navigate(['/home']);
  }

}
