import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-stock-unit',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent, MatIcon],
  templateUrl: './Stock-Unit.component.html',
  styleUrl: './Stock-Unit.component.css'
})
export class StockUnitComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];

  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Stock Unit', placeholder: 'Search by Stock Unit', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
    { type: 'inputfield', label: 'Description', placeholder: ' Enter the description', value: '' },
  ];
  openPopup() {
    this.popupModal.title = ' Stock Unit Management';
   
    this.popupModal.openModal();
  }
}
