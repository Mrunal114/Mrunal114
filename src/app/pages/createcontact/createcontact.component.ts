import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
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
import { CommonModule } from '@angular/common';
import { CardcomponentComponent } from '../../shared/cardcomponent/cardcomponent.component';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { Router } from '@angular/router';
import { DatepickerComponent } from '../../shared/datepicker/datepicker.component';

@Component({
  selector: 'app-createcontact',
  imports: [
    SidebarComponent,
    HeaderComponent,
    CommonModule,
    CardcomponentComponent,
    InputfieldComponent,
    ButtonComponent,
    SubdropdownComponent,
    DdComponent,
    DatepickerComponent,
  ],
  templateUrl: './createcontact.component.html',
  styleUrl: './createcontact.component.css',
})
export class CreatecontactComponent {
  constructor(private router: Router) {}
  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  openNewPage() {
    this.router.navigate(['/mainlayout/masterdata/accounts/contacts']);
  }
}
