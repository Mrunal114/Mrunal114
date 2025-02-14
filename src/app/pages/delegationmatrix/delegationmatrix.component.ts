import { Component,ViewChild } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from "../../shared/popupmodal/popupmodal.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-delegationmatrix',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './delegationmatrix.component.html',
  styleUrl: './delegationmatrix.component.css'
})
export class DelegationmatrixComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  formFields = [
    { type: 'inputfield', label: 'Manager Name', placeholder: 'Start Typing Manager Name', value: '' },
    { type: 'inputfield', label: 'Employee Name', placeholder: 'Start Typing Employee Name', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
    openPopup() {
      this.popupModal.title = 'Delegation Matrix';
   
  
      this.popupModal.openModal();
    }
}
