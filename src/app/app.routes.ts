import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrandComponent } from './pages/brand/brand.component';

import { SegmentComponent } from './pages/segment/segment.component';
import { MainChannelComponent } from './pages/main-channel/main-channel.component';

import { TableComponent } from './shared/table/table.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DesignationMasterComponent } from './pages/designation-master/designation-master.component';

import { DesignationHierarchyComponent } from './pages/designation-hierarchy/designation-hierarchy.component';
import { DepartmentSetupComponent } from './pages/departmentsetup/departmentsetup.component';
import { RoleManagementComponent } from './pages/rolemanagement/rolemanagement.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DivisionmasterComponent } from './pages/divisionmaster/divisionmaster.component';
import { CustomerClassComponent } from './pages/customer-class/customer-class.component';
import { IndustryTypeComponent } from './pages/industry-type/industry-type.component';
import { IndustrySubTypeComponent } from './pages/industry-sub-type/industry-sub-type.component';
import { CustomerDivisionComponent } from './pages/customer-division/customer-division.component';
import { CustomerSubDivisionComponent } from './pages/customer-sub-division/customer-sub-division.component';
import { CustomerGroupComponent } from './pages/customer-group/customer-group.component';
import { CustomerSubGroupComponent } from './pages/customer-sub-group/customer-sub-group.component';
import { CustomerTypeComponent } from './pages/customer-type/customer-type.component';
import { CustomerSubTypeComponent } from './pages/customer-sub-type/customer-sub-type.component';
import { CustomerGroup1Component } from './pages/customer-group-1/customer-group-1.component';
import { CustomerGroup2Component } from './pages/customer-group-2/customer-group-2.component';
import { CustomerGroup3Component } from './pages/customer-group-3/customer-group-3.component';
import { SalesorgComponent } from './pages/salesorg/salesorg.component';
import { CompetitordataComponent } from './pages/competitordata/competitordata.component';

import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';

import { SalesofficeComponent } from './pages/salesoffice/salesoffice.component';

import { SubChannelComponent } from './pages/sub-channel/sub-channel.component';
import { ItemGroup1Component } from './pages/item-group1/item-group1.component';
import { ItemGroup2Component } from './pages/item-group2/item-group2.component';
import { ItemGroup3Component } from './pages/item-group3/item-group3.component';
import { ItemGroup4Component } from './pages/item-group4/item-group4.component';
import { ItemTypeComponent } from './pages/item-type/item-type.component';
import { ItemSubTypeComponent } from './pages/item-sub-type/item-sub-type.component';

import { ItemcategoryComponent } from './pages/itemcategory/itemcategory.component';
import { IndustrydivisionComponent } from './pages/industrydivision/industrydivision.component';
import { AccountTypeComponent } from './pages/account-type/account-type.component';
import { ItemMasterComponent } from './pages/item-master/item-master.component';
import { IndustrysegmentComponent } from './pages/industrysegment/industrysegment.component';
import { IndustrySubsegmentComponent } from './pages/industry-subsegment/industry-subsegment.component';
import { ItemSourcemasterComponent } from './pages/item-sourcemaster/item-sourcemaster.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerCreateIdComponent } from './pages/customer-create-id/customer-create-id.component';
import { AllocationMatrixComponent } from './pages/allocation-matrix/allocation-matrix.component';
import { SalesAreaDeterminationComponent } from './pages/sales-area-determination/sales-area-determination.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { DistributionchannelComponent } from './pages/distributionchannel/distributionchannel.component';
import { DelegationmatrixComponent } from './pages/delegationmatrix/delegationmatrix.component';
import { BusinessdivisionComponent } from './pages/businessdivision/businessdivision.component';
import { RoleaccessmatrixComponent } from './pages/roleaccessmatrix/roleaccessmatrix.component';
import { ContactMasterComponent } from './pages/contact-master/contact-master.component';
import { CreatecontactComponent } from './pages/createcontact/createcontact.component';
import { ModelmasterComponent } from './pages/modelmaster/modelmaster.component';
import { VendormasterComponent } from './pages/vendormaster/vendormaster.component';
import { PurchaseorgComponent } from './pages/purchaseorg/purchaseorg.component';
import { BuyercodeComponent } from './pages/buyercode/buyercode.component';
import { PlantsetupComponent } from './pages/plantsetup/plantsetup.component';
import { WarehousemasterComponent } from './pages/warehousemaster/warehousemaster.component';
import { SalesareaComponent } from './pages/salesarea/salesarea.component';
import { OrgunitsetupComponent } from './pages/orgunitsetup/orgunitsetup.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { StateComponent } from './pages/state/state.component';
import { DistrictComponent } from './pages/district/district.component';
import { StateRegionComponent } from './pages/state-region/state-region.component';
import { RegionalDepotComponent } from './pages/regional-depot/regional-depot.component';
import { StockUnitComponent } from './pages/stock-unit/stock-unit.component';
import { CostCentreComponent } from './pages/cost-centre/cost-centre.component';
import { SubCostCentre1Component } from './pages/sub-cost-centre-1/sub-cost-centre-1.component';
import { SubCostCentre2Component } from './pages/sub-cost-centre-2/sub-cost-centre-2.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
  {
    path: 'mainlayout',
    component: MainlayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'masterdata',
        children: [
          {
            path: 'accounts',
            children: [
              {
                path: 'customers',
                component: CustomersComponent,
              },
              {
                path: 'customer-create-id',
                component: CustomerCreateIdComponent,
              },
              {
                path: 'contacts',
                component: ContactMasterComponent,
              },
              {
                path: 'createcontact',
                component: CreatecontactComponent,
              },
              {
                path: 'vendormaster',
                component: VendormasterComponent,
              },
            ],
          },
          {
            path: 'itemmaster',
            children: [
              {
                path: 'categorymaster',
                component: CategoryComponent,
              },
              {
                path: 'divisionmaster',
                component: DivisionmasterComponent,
              },
              {
                path: 'modelmaster',
                component: ModelmasterComponent,
              },
              {
                path: 'item-master',
                component: ItemMasterComponent,
              },
              {
                path: 'competitordata',
                component: CompetitordataComponent,
              },
              {
                path: 'itemcategory',
                component: ItemcategoryComponent,
              },
            ],
          },
          {
            path: 'othermasters',
            children: [
              {
                path: 'industrydivision',
                component: IndustrydivisionComponent,
              },
              {
                path: 'account-type',
                component: AccountTypeComponent,
              },
              {
                path: 'industrysegment',
                component: IndustrysegmentComponent,
              },
              {
                path: 'industrysubsegment',
                component: IndustrySubsegmentComponent,
              },
            ],
          },
          {
            path: 'sourcemaster',
            children: [
              {
                path: 'item-sourcemaster',
                component: ItemSourcemasterComponent,
              },
              {
                path: 'itemcategory',
                component: ItemcategoryComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'masterdatasetup',
        children: [
          {
            path: 'itemattributes',
            children: [
              {
                path: 'brand',
                component: BrandComponent,
              },
              {
                path: 'Segment',
                component: SegmentComponent,
              },
              {
                path: 'main-channel',
                component: MainChannelComponent,
              },
              {
                path: 'sub-channel',
                component: SubChannelComponent,
              },
              {
                path: 'item-group1',
                component: ItemGroup1Component,
              },
              {
                path: 'item-group2',
                component: ItemGroup2Component,
              },
              {
                path: 'item-group3',
                component: ItemGroup3Component,
              },
              {
                path: 'item-group4',
                component: ItemGroup4Component,
              },
              {
                path: 'item-type',
                component: ItemTypeComponent,
              },
              {
                path: 'item-sub-type',
                component: ItemSubTypeComponent,
              },
            ],
          },
          {
            path: 'customerattributes',
            children: [
              {
                path: 'customer-class',
                component: CustomerClassComponent,
              },
              {
                path: 'industry-type',
                component: IndustryTypeComponent,
              },
              {
                path: 'industry-sub-type',
                component: IndustrySubTypeComponent,
              },
              {
                path: 'customer-division',
                component: CustomerDivisionComponent,
              },
              {
                path: 'customer-sub-division',
                component: CustomerSubDivisionComponent,
              },
              {
                path: 'customer-group',
                component: CustomerGroupComponent,
              },
              {
                path: 'customer-sub-group',
                component: CustomerSubGroupComponent,
              },
              {
                path: 'customer-type',
                component: CustomerTypeComponent,
              },
              {
                path: 'customer-sub-type',
                component: CustomerSubTypeComponent,
              },
              {
                path: 'customer-group-1',
                component: CustomerGroup1Component,
              },
              {
                path: 'customer-group-2',
                component: CustomerGroup2Component,
              },
              {
                path: 'customer-group-3',
                component: CustomerGroup3Component,
              },
            ],
          },
        ],
      },
      {
        path: 'business-setup',
        children: [
          {
            path: 'SalesArea',
            children: [
              {
                path: 'salesarea',
                component: SalesareaComponent,
              },
              {
                path: 'salesorg',
                component: SalesorgComponent,
              },
              {
                path: 'distributionchannel',
                component: DistributionchannelComponent,
              },
              {
                path: 'businessdivision',
                component: BusinessdivisionComponent,
              },
              {
                path: 'salesoffice',
                component: SalesofficeComponent,
              },
              {
                path: 'sales-area-determination',
                component: SalesAreaDeterminationComponent,
              },
              {
                path: 'distributionchannel',
                component: DistributionchannelComponent,
              },
              {
                path: 'businessdivision',
                component: BusinessdivisionComponent,
              },

            ],
          },
          {

            path:'purchase-area',
            children: [
              {
                path:'purchase-org',
                component:PurchaseorgComponent,

              },
              {
                path:'buyercode',
                component:BuyercodeComponent,
              }
            ]
          },
          {

            path:'inventoryarea',
            children: [
              {
                path:'plantsetup',
                component:PlantsetupComponent,
              },
              {
                path:'warehousemaster',
                component:WarehousemasterComponent,
              },
              {path:'regionaldepot',
                component: RegionalDepotComponent,
              },
              {path:'stockunit',
                component: StockUnitComponent,
              },
            ]
          },
          {
            path: 'geography-setup',
            children: [
              {
                path: 'region',
                component: RegionComponent,
              },
              {
                path: 'state-region',
                component: StateRegionComponent,
              },
              {
                path: 'country',
                component: CountryComponent,
              },
              {
                path: 'state',
                component: StateComponent,
              },
              {
                path: 'district',
                component: DistrictComponent,
              },
            ],
          },
          {
            path: 'userdata',
            children: [
              {
                path: 'designation-master',
                component: DesignationMasterComponent,
              },
              {
                path: 'designation-hierarchy',
                component: DesignationHierarchyComponent,
              },
              {
                path: 'department-setup',
                component: DepartmentSetupComponent,
              },
            ],
          },
          
          {
            path: 'useraccess',
            children: [
              {
                path: 'rolemanagement',
                component: RoleManagementComponent,
              },
              {
                path: 'roleaccessmatrix',
                component: RoleaccessmatrixComponent,
              },
            ],
          },
          {
            path:'costdatasetup',
            children:[
              {
                path:'costcentre',
                component:CostCentreComponent,
              },
              {
                path:'subcostcentre1',
                component:SubCostCentre1Component,
              },
              {
                path:'subcostcentre2',
                component:SubCostCentre2Component,
              },
            ]
          },
          {
            path: 'orgsetup',
            children: [
              {
                path: 'orgunitsetup',
                component: OrgunitsetupComponent,
              },
             
            ],
          },
        ],
      },
   
      {
        path: 'UserMgmt',
        children: [
          {
            path: 'UserMaster',
            children: [
              {
                path: 'newuser',
                component: NewuserComponent,
              },
            ],
          },
          {
            path: 'Workflowsetup',
            children: [
              {
                path: 'allocation-matrix',
                component: AllocationMatrixComponent,
              },
              {
                path: 'delegationmatrix',
                component: DelegationmatrixComponent,
              },
            ],
          },
          {
            path: 'UserLogs',
            children: [
              {
                path: 'userlogin',
                component: UserloginComponent,
              },
            ],
          },
        ],
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
