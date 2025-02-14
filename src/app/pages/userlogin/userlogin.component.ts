import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { DatepickerComponent } from "../../shared/datepicker/datepicker.component";
@Component({
  selector: 'app-userlogin',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, DatepickerComponent],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

}
