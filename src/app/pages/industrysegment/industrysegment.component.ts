import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { DialogComponent } from '../../shared/dialogcomponent/dialogcomponent.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TableComponent } from '../../shared/table/table.component';
import { IndustrysegmentService } from '../../services/industrysegment/industrysegment.service';

@Component({
  selector: 'app-industrysegment',
  imports: [
    MatCardModule,
    ButtonComponent,
    PaginatorComponent,
    MatIcon,
    DropdownComponent,
    MatOption,
    TableComponent,
    SidebarComponent,
    HeaderComponent,
    PopupmodalComponent,
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    DdComponent,
    InputfieldComponent,
  ],
  templateUrl: './industrysegment.component.html',
  styleUrl: './industrysegment.component.css',
})
export class IndustrysegmentComponent {
   constructor(private industrysegmentService:IndustrysegmentService){}
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Industry Segment',
      placeholder: 'Enter Industry Segment',
      value: '',
    },
    {
      type: 'dd',
      label: 'Status',
      options: [
        { value: 'Active', viewValue: 'Active' },
        { value: 'Inactive', viewValue: 'Inactive' },
      ],
    },
  ];
  openPopup() {
    this.popupModal.title = 'Industry Segment Management';

    this.popupModal.openModal();
  }

  handleFormSubmit(data: any) {

    let industrysegmentData =  {
        IndustrialSegment :data["Industry Segment"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.industrysegmentService.insertIndustrySegment('InsertIndustrialSegment',industrysegmentData).subscribe({

        next: (response) => {
          console.log('Data submitted successfully:', response);
          alert('Data submitted successfully!');
        },
        error: (error) => {
          console.error('Error submitting data:', error);
          alert('Failed to submit data!');
        },
      })
  }
}
