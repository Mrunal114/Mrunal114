// sidebar-menu.ts

import { icon } from "@fortawesome/fontawesome-svg-core";
import path from "path";
import { title } from "process";
import { routes } from "./app.routes";


export const SIDEBAR_MENU = [
  
  {
    title: 'Master-Data-Setup',
    icon: 'faCog',
    children: [
      {
        path:'Sales Area',
        children:[
          {
            path: 'Sales Area',
              route: '/mainlayout/business-setup/SalesArea/salesarea',
              title: 'Sales Area',
              icon: 'faCog'
          },
          {
            path: 'Sales Org',
              route: '/mainlayout/business-setup/SalesArea/salesorg',
              title: 'Sales Org',
              icon: 'faCog'
          },
          {
            path: 'Distribution Channel',
              route: '/mainlayout/business-setup/SalesArea/distributionchannel',
              title: 'Distribution Channel',
              icon: 'faCog'
          },
          {
            path: 'Sales Office',
              route: '/mainlayout/business-setup/SalesArea/salesoffice',
              title: 'Sales Office',
              icon: 'faCog'
          },
          {
            path: 'Business Division',
              route: '/mainlayout/business-setup/SalesArea/businessdivision',
              title: 'Business Division',
              icon: 'faCog'
          },

        ]

      },
        {
          path:'User Data',
          children: [
            {
              path: 'User Data',
              route: '/mainlayout/business-setup/userdata/designation-master',
              title: 'Designation Master',
              icon: 'faCog'
            },
            {
              path: 'User Data',
              route: '/mainlayout/business-setup/userdata/designation-hierarchy',
              title: 'Designation Hierarchy',
              icon: 'faCog'
            },
            {
              path: 'User Data',
              route: '/mainlayout/business-setup/userdata/department-setup',
              title: 'Department Setup',
              icon: 'faCog'
            },
          ]
          
        },
        {
          path:'User Access',
          children: [
            {
              path: 'User Access',
              route: '/mainlayout/business-setup/useraccess/rolemanagement',
              title: 'Role Master',
              icon: 'faCog'
            },
            {
              path: 'User Access',
              route: '/mainlayout/business-setup/useraccess/roleaccessmatrix',
              title: 'Role Access Matrix',
              icon: 'faCog'
            },
           
          ]
          
        },
        {
          path:'Purchase Area',
          children:[
            {
              path: 'Purchase Org',
              route: '/mainlayout/business-setup/purchase-area/purchase-org',
              title: 'Purchase Org',
              icon: 'faCog'
            },
            {
              path: 'Buyer code',
              route: '/mainlayout/business-setup/purchase-area/buyercode',
              title: 'Buyer Code',
              icon: 'faCog'
            }
          ]

        },
        {
          path:'Inventory Area',
          children: [
            {
              path: 'Plant Setup',
              route: '/mainlayout/business-setup/inventoryarea/plantsetup',
              title: 'Plant Setup',
              icon: 'faCog'
            },
            {
              path: 'Warehouse Master',
              route: '/mainlayout/business-setup/inventoryarea/warehousemaster',
              title: 'Warehouse Master',
              icon: 'faCog'
            },
            {
              path: 'Regional Depot',
              route: '/mainlayout/business-setup/inventoryarea/regionaldepot',
              title: 'Regional Depot',
              icon: 'faCog'
            },
            {
              path: 'Stock Unit Area',
              route: '/mainlayout/business-setup/inventoryarea/stockunit',
              title: 'Stock Unit Area',
              icon: 'faCog'
            },
           
          ]
          
        },
        {
          path:'Cost Data Setup',
          children: [
            {
              path: 'Cost Center',
              route: '/mainlayout/business-setup/costdatasetup/costcentre',
              title: 'Cost Center',
              icon: 'faCog'
            },
            {
              path: 'Sub Cost Center 1',
              route: '/mainlayout/business-setup/costdatasetup/subcostcentre1',
              title: 'Sub Cost Center 1',
              icon: 'faCog'
            },
            {
              path: 'Sub Cost Center 2',
              route: '/mainlayout/business-setup/costdatasetup/subcostcentre2',
              title: 'Sub Cost Center 2',
              icon: 'faCog'
            },
            
           
          ]
          
        },
        {
          path:'Org Setup',
          children: [
            {
              path: 'Org Unit Setup',
              route: '/mainlayout/business-setup/orgsetup/orgunitsetup',
              title: 'Org Unit Setup',
              icon: 'faCog'
            },
           
            
           
          ]
          
        },
        {
          path:'Geography Setup',
          children: [
            {
              path: 'Region',
              route: '/mainlayout/business-setup/geography-setup/region',
              title: 'Region',
              icon: 'faCog'
            },
            {
              path: 'State-Region',
              route: '/mainlayout/business-setup/geography-setup/state-region',
              title: 'State-Region',
              icon: 'faCog'
            },
            {
              path: 'Country',
              route: '/mainlayout/business-setup/geography-setup/country',
              title: 'Country',
              icon: 'faCog'
            },
            {
              path: 'State',
              route: '/mainlayout/business-setup/geography-setup/state',
              title: 'State',
              icon: 'faCog'
            },
            {
              path: 'District',
              route: '/mainlayout/business-setup/geography-setup/district',
              title: 'District',
              icon: 'faCog'
            },
          ]
          
        },

        
        
    ],
  },

  {
    title: 'Master-Data',
    icon: 'faCog',
    children: [
        {
          path:'Accounts',
          children: [
            {
              path: 'Customers',
              route: '/mainlayout/masterdata/accounts/customers',
              title: 'Customers',
              icon: 'faCog'
            },
            {
              path: 'Contacts',
              route: '/mainlayout/masterdata/accounts/contacts',
              title: 'Contacts'
 
            },
            {
              path: 'Vendor Master',
              route: '/mainlayout/masterdata/accounts/vendormaster',
              title: 'Vendor Master'
 
            },
          ]
        },
        {
          path:'Item Master',
          children: [
            {
              path: 'Category Master',
              route: '/mainlayout/masterdata/itemmaster/categorymaster',
              title: 'Category Master',
              icon: 'faCog'
            },
            {
              path: 'Division Master',
              route: '/mainlayout/masterdata/itemmaster/divisionmaster',
              title: 'Division Master',
 
            },
            {
              path: 'Item Master',
              route: '/mainlayout/masterdata/itemmaster/item-master',
              title: 'Item Master'
 
            },
            {
              path: 'Competitor Data',
              route: '/mainlayout/masterdata/itemmaster/competitordata',
              title: 'Competitor Data'
 
            },
            {
              path: 'Item Category',
              route: '/mainlayout/masterdata/itemmaster/itemcategory',
              title: 'Item Category'
 
            },
          ]
        },
        {
          path:'Other Master',
          children: [
            {
              path: 'Industry Division',
              route: '/mainlayout/masterdata/othermasters/industrydivision',
              title: 'Industry Division',
              icon: 'faCog'
            },
            {
              path: 'Account Type',
              route: '/mainlayout/masterdata/othermasters/account-type',
              title: 'Account Type',
 
            },
            {
              path: 'Industry Segment',
              route: '/mainlayout/masterdata/othermasters/industrysegment',
              title: 'Industry Segment',
 
            },
            {
              path: 'Industry Sub Segment',
              route: '/mainlayout/masterdata/othermasters/industrysubsegment',
              title: 'Industry Sub Segment',
 
            },
          ]
        },
        {
          path:'Source Master',
          children:[
            {
              path:'Item Source Master',
              route: '/mainlayout/masterdata/sourcemaster/item-sourcemaster',
              title:'Item Source Master',
            }
           
 
 
          ]
        }
       
       
    ],
  },

  {
    title: 'User-Mgmt',
    icon: 'faCog',
    children: [
        {
          path:'User Master',
          children: [
            {
              path: 'New User',
              route: '/mainlayout/UserMgmt/UserMaster/newuser',
              title: 'New User',
              icon: 'faCog'
            },
          ]
        },
 
        {
          path:'Workflow Setup',
          children: [
            {
              path: 'Allocation Matrix',
              route: '/mainlayout/UserMgmt/Workflowsetup/allocation-matrix',
              title: 'Allocation Matrix',
              icon: 'faCog'
            },
            {
              path: 'Delegation Matrix',
              route: '/mainlayout/UserMgmt/Workflowsetup/delegationmatrix',
              title: 'Delegation Matrix',
              icon: 'faCog'
            },
          ]
        },
 
        {
          path:'User Logs',
          children: [
            {
              path: 'User Login',
              route: '/mainlayout/UserMgmt/UserLogs/userlogin',
              title: 'User Login',
              icon: 'faCog'
            },
          ]
        },
 
    ],
 
   
  },

  {
    title: 'Master-Data-Setup',
    icon: 'faCog',
    children: [
        {
          path:'Item Attribute',
          children: [
            {
              path: 'Brand',
              route: '/mainlayout/masterdatasetup/itemattributes/brand',
              title: 'Brand',
              icon: 'faCog'
            },
            {
              path: 'Segment',
              route: '/mainlayout/masterdatasetup/itemattributes/Segment',
              title: 'Segment'
 
            },
            {
              path: 'Main Channel',
              route: 'mainlayout/masterdatasetup/itemattributes/main-channel',
              title: 'Main Channel'
 
            },
            {
              path: 'Sub Channel',
              route: 'mainlayout/masterdatasetup/itemattributes/sub-channel',
              title: 'Sub Channel'
 
            },
            {
              path: 'Item Group 1',
              route: 'mainlayout/masterdatasetup/itemattributes/item-group1',
              title: 'Item Group 1'
 
            },
            {
              path: 'Item Group 2',
              route: 'mainlayout/masterdatasetup/itemattributes/item-group2',
              title: 'Item Group 2'
 
            },
            {
              path: 'Item Group 3',
              route: 'mainlayout/masterdatasetup/itemattributes/item-group3',
              title: 'Item Group 3'
 
            },
            {
              path: 'Item Group 4',
              route: 'mainlayout/masterdatasetup/itemattributes/item-group4',
              title: 'Item Group 4'
 
            },
            {
              path: 'Item Type',
              route: 'mainlayout/masterdatasetup/itemattributes/item-type',
              title: 'Item Type'
 
            },
            {
              path: 'Item Sub Type',
              route: 'mainlayout/masterdatasetup/itemattributes/item-sub-type',
              title: 'Item Sub Type'
 
            },
          ]
        },
 
        {
          path:'Customer Attribute',
          children: [
            {
              path: 'Customer Class',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-class',
              title: 'Customer Class',
              icon: 'faCog'
            },
            {
              path: 'Industry Type',
              route: '/mainlayout/masterdatasetup/customerattributes/industry-type',
              title: 'Industry Type',
              icon: 'faCog'
            },
            {
              path: 'Industry Sub Type',
              route: '/mainlayout/masterdatasetup/customerattributes/industry-sub-type',
              title: 'Industry Sub Type',
              icon: 'faCog'
            },
            {
              path: 'Customer Division',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-division',
              title: 'Customer Division',
              icon: 'faCog'
            },
            {
              path: 'Customer Sub Division',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-sub-division',
              title: 'Customer Sub Division',
              icon: 'faCog'
            },
            {
              path: 'Customer Group',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-group',
              title: 'Customer Group',
              icon: 'faCog'
            },
            {
              path: 'Customer Sub Group',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-sub-group',
              title: 'Customer Sub Group',
              icon: 'faCog'
            },
            {
              path: 'Customer Type',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-type',
              title: 'Customer Type',
              icon: 'faCog'
            },
            {
              path: 'Customer Sub Type',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-sub-type',
              title: 'Customer Sub Type',
              icon: 'faCog'
            },
            {
              path: 'Customer Group 1',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-group-1',
              title: 'Customer Group 1',
              icon: 'faCog'
            },
            {
              path: 'Customer Group 2',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-group-2',
              title: 'Customer Group 2',
              icon: 'faCog'
            },
            {
              path: 'Customer Group 3',
              route: '/mainlayout/masterdatasetup/customerattributes/customer-group-3',
              title: 'Customer Group 3',
              icon: 'faCog'
            },
 
          ]
        }
    ],
 
   
  },

  


 
 
];
