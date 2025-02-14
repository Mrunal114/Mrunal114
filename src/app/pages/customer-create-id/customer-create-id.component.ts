import { Component } from '@angular/core';
import { SubdropdownComponent } from '../../shared/subdropdown/subdropdown.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { CardcomponentComponent } from '../../shared/cardcomponent/cardcomponent.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create-id',
  imports: [SidebarComponent,HeaderComponent,CommonModule,CardcomponentComponent,InputfieldComponent,ButtonComponent,SubdropdownComponent,DdComponent],
  templateUrl: './customer-create-id.component.html',
  styleUrl: './customer-create-id.component.css'
})
export class CustomerCreateIdComponent {
  statusOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    
  ];
  selectedStatus = '';
  stateOptions = [
    { value: 'Maharashtra', viewValue: 'Maharashtra' },
    { value: 'Greenwood', viewValue: 'Greenwood' },
    { value: 'Sydney', viewValue: 'Sydney' }
    
  ];
  selectedState = '';
  districtOptions = [
    { value: 'Mumbai', viewValue: 'Mumbai' },
      { value: 'LA', viewValue: 'LA' },
      { value: 'Northern Sydney', viewValue: 'Northern Sydney' }
    
  ];
  selectedDistrict = '';
  countryOptions = [
    { value: 'India', viewValue: 'India' },
    { value: 'USA', viewValue: 'USA' },
    { value: 'Australia', viewValue: 'Australia' }
  ];
  selectedCountry = '';
  isCustGpOptions = [
    { value:'Select', viewValue:'Select' },
    { value: 'Yes', viewValue: 'Yes' },
    { value: 'No', viewValue: 'No' },
    
  ];
  selectedIsCustGp = '';
  regionOptions = [
    { value: 'North', viewValue: 'North' },
      { value: 'South', viewValue: 'South' },
      { value: 'East', viewValue: 'East' }
    
  ];
  selectedRegion = '';
  departmentOptions = [
    { value: 'dept-001', viewValue: 'dept-001' },
      { value: 'dept-002', viewValue: 'dept-002' },
      { value: 'dept-003', viewValue: 'dept-003' }
    
  ];
  selectedDepartment = '';
  DivisionCodeOptions= [
    { value:'Division-001', viewValue:'Division-001' },
    { value: 'Division-002', viewValue: 'Division-002' },
    { value: 'Division-003', viewValue: 'Division-003' },

  ];
  selectedDivCode='';
  SalesOfficeOptions=[
    { value:'SalesOffice-001', viewValue:'SalesOffice-001' },
    { value: 'SalesOffice-002', viewValue: 'SalesOffice-002' },
    { value: 'SalesOffice-003', viewValue: 'SalesOffice-003' },

  ];
  selectedSalesOffice='';
  InSegmentOptions=[
    { value:'InSeg-001', viewValue:'InSeg-001' },
    { value: 'InSeg-002', viewValue: 'InSeg-002' },
    { value: 'InSeg-003', viewValue: 'InSeg-003' },

  ];
  selectedInSegment='';
  AccountTypeOptions=[
    { value:'AType-001', viewValue:'AType-001' },
    { value: 'AType-002', viewValue: 'AType-002' },
    { value: 'AType-003', viewValue: 'AType-003' },

  ];
  selectedAccountType='';
  InDivisionOptions=[
    { value:'InDiv-001', viewValue:'InDiv-001' },
    { value: 'InDiv-002', viewValue: 'InDiv-002' },
    { value: 'InDiv-003', viewValue: 'InDiv-003' },

  ];
  selectedInDivision='';
  CustClassOptions=[
    { value:'custClass-001', viewValue:'custClass-001' },
    { value: 'custClass-002', viewValue: 'custClass-002' },
    { value: 'custClass-003', viewValue: 'custClass-003' },

  ];
  selectedCustClass='';
  SalesAreaOptions=[
    { value:'SalesA-001', viewValue:'SalesA-001' },
    { value: 'SalesA-002', viewValue: 'SalesA-002' },
    { value: 'SalesA-003', viewValue: 'SalesA-003' },

  ];
  selectedSalesArea='';
  constructor(private router: Router) {}
    
  
    openNewPage(){
  
      this.router.navigate(['/mainlayout/masterdata/accounts/customers']);
    }

}
