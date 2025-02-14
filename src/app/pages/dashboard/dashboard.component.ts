import { Component, ViewEncapsulation,  } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CarddashComponent } from "../../shared/carddash/carddash.component";
import { DropdownComponent } from "../../shared/dropdown/dropdown.component";
import { TableComponent } from "../../shared/table/table.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { InputFieldComponent } from "../../shared/input-field/input-field.component";
import { DatepickerComponent } from "../../shared/datepicker/datepicker.component";
import { DdComponent } from "../../shared/dd/dd.component";


@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, HeaderComponent, CarddashComponent, DropdownComponent, TableComponent, ButtonComponent, InputFieldComponent, DatepickerComponent, DdComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  opportunityType: string = 'new';
  fromDate: string = '2024-12-11';
  toDate: string = '2024-12-18';
  constructor(private router: Router) {}

  onLogin() {
    // Simulate login and navigate
    this.router.navigate(['/dashboard']);
  }

 
}
