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
  selector: 'app-sub-channel',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent,
     PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './sub-channel.component.html',
  styleUrl: './sub-channel.component.css'
})
export class SubChannelComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  
  formFields = [
    { type: 'dd', label: 'Main Channel', options: [
      { value: 'MainChannel-01', viewValue: 'MainChannel-01' },
      { value: 'MainChannel-02', viewValue: 'MainChannel-02' },
    ]},
    { type: 'inputfield', label: 'Sub Channel', placeholder: 'Enter Sub Channel ', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ]}
    ,
    { type: 'inputfield', label: 'Description', placeholder: 'Description', value: '' },
   ]
        openPopup() {
          this.popupModal.title = 'Sub Channel Management';
          
          this.popupModal.openModal();
        }

}
