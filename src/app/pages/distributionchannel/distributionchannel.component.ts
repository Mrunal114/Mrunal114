import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { MatIcon } from '@angular/material/icon';
import { DistributionChannelService } from '../../services/distributionChannel/distribution-channel.service';

@Component({
  selector: 'app-distributionchannel',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './distributionchannel.component.html',
  styleUrl: './distributionchannel.component.css'
})
export class DistributionchannelComponent {
  constructor(private distributionChannelService:DistributionChannelService){}
   @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  
   formFields = [
    { type: 'inputfield', label: 'DistributionChannelName', placeholder: 'Enter DistributionChannel', value: '' },

    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
    openPopup() {
      this.popupModal.title = 'Distribution Channel Management';
   
  
    this.popupModal.openModal();
   }
  
   handleFormSubmit(data: any) {

    let distributionChannelData =  {
        DistributionChannel :data["DistributionChannelName"],
        UserID : "1363",
        Status : data["Status"],
        Mode : "1",
        OrgCode : "1102",
    }

    
      this.distributionChannelService.insertDistributionChannel('InsertDistributionChannel',distributionChannelData).subscribe({

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
