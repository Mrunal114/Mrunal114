import { Component } from '@angular/core';
import { TableComponent } from "../../shared/table/table.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-roleaccessmatrix',
  imports: [TableComponent, ButtonComponent, InputfieldComponent, DdComponent,MatIcon],
  templateUrl: './roleaccessmatrix.component.html',
  styleUrl: './roleaccessmatrix.component.css'
})
export class RoleaccessmatrixComponent {
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  selectedStatus = '';
}
