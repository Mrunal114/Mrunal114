import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { TableComponent } from '../../shared/table/table.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { CommonModule } from '@angular/common';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-segment',
  imports: [
    SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent,
     DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon
      ],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.css'
})
export class SegmentComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Segment Code', placeholder: 'Enter Segment Code', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    ,
    { type: 'inputfield', label: 'Description', placeholder: 'Description', value: '' },
   ]
        openPopup() {
          this.popupModal.title = 'Segment Management';
          
          this.popupModal.openModal();
        }
  constructor(private router:Router){}

  onBrand(){
    this.router.navigate(['/home']);
  }

}
