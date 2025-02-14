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
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-customers',
  imports: [SidebarComponent,HeaderComponent,ButtonComponent,TableComponent,PaginatorComponent,
    DdComponent,CommonModule,PopupmodalComponent,InputfieldComponent,MatIcon],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  constructor(private router: Router) {}
  

  openNewPage(){

    // this.router.navigate(['/mainlayout/masterdata/accounts/customers/customer-create-id']);
    this.router.navigate(['/mainlayout/masterdata/accounts/customer-create-id']);
  }
}
