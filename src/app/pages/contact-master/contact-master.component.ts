import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-master',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    InputFieldComponent,
    DropdownComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    PopupmodalComponent,
    InputfieldComponent,
    DdComponent,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    MatIcon,
  ],
  templateUrl: './contact-master.component.html',
  styleUrl: './contact-master.component.css',
})
export class ContactMasterComponent {
  constructor(private router: Router) {}
  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  openNewPage() {
    this.router.navigate(['/mainlayout/masterdata/accounts/createcontact']);
  }
}
