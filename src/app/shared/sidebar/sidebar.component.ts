import { Component } from '@angular/core';
import { SubdropdownComponent } from '../subdropdown/subdropdown.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartBar, faEnvelope, faProjectDiagram, faTable, faUsers, faCog, faUpload, faBullseye, faFileAlt, IconDefinition, faBriefcase, faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { SalesofficeComponent } from '../../pages/salesoffice/salesoffice.component';
import { SIDEBAR_MENU } from '../../model';
import { MainlayoutComponent } from '../../pages/mainlayout/mainlayout.component';
import { SalesareaComponent } from '../../pages/salesarea/salesarea.component';
import { Router } from '@angular/router';

interface Dropdown {
  title: string;
  items: string[];
}
const routes: Routes = [
  { path: 'Sales Area', component: SalesareaComponent,  },
 
  // Add other level3 routes as needed
];

@Component({
  selector: 'app-sidebar',
  imports: [SubdropdownComponent, CommonModule, FontAwesomeModule,RouterLink,RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  constructor(private router: Router) {}

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }
  sidebarMenu = SIDEBAR_MENU
  isCollapsed = false;
  isMobile = false;
  activeDropdown: string | null = null;
activeSubDropdown: string | null = null;
  dropdowns: Dropdown[] = [
    { title: 'Reports', items: ['Dashboard', 'List Reports'] },
    { title: 'Leads', items: ['Leads','Leads Dashboard', 'Maintain Leads', 'Lead Follow Up'] },
    { title: 'Opportunities', items: ['Opportunity', 'Opportunity Dashboard','Opportunity Followup'] },
    { title: 'Quotation Management', items: ['Sales Quotations'] },
    { title: 'Activities', items: ['Business/Sales Activity'] },
    { title: 'Sales Target', items: ['Target'] },
    { title: 'Campaign', items: ['Campaigns Data'] },
    { title: 'Project Tracker', items: ['Project Tracker'] },
    { title: 'Master Data', items: ['Accounts', 'Item Master','Other Master','Source Master'] },
    { title: 'Master Data Setup', items: ['Item Attribute', 'Customer Attribute', 'Field Selection'] },
    { title: 'Business Setup', items: ['Sales Area', 'User Data','User Access', 'Purchase Area', 'Inventory Area', 'Cost Data Setup','Org Setup', 'Geography Setup'] },
    { title: 'User Mgmt', items: ['User Master', 'Workflow Setup', 'User Logs'] },
    { title: 'Communication', items: ['Emailer'] },
    { title: 'Interface', items: ['SAP Interface'] },
    { title: 'Bulk Upload', items: ['Bulk Upload',] },

    
  ];
  level3Items: { [key: string]: string[] } = {
    Dashboard: ['Team Dashboard', 'Opportunity Dashboard', 'Opportunity Anaylsis Dashboard','BDM Productivity Dashboard','BDM Scorecard', 'BDM Target Dashboard', 'Customer 360 Report', 'Project Tracker Dashboard'],
    'List Reports': ['Opportunities Report', 'Opportunity MTTR Report','Activities Report', 'Daily Schedule Report'],
    Leads: ['Lead List', 'Lead ReAllocation'],
   'Leads Dashboard':['Leads For TheTeam', 'My Lead Dashboard'],
   'Maintain Leads':['Allocation Override','Activity Bypass','Lead Data Source Change','Lead Update'],
   'Lead Follow Up':['Lead FollowUp List', 'Lead Report'],
   Opportunity: ['Opportunity List', 'Opportunity Re-Allocation'],
   'Opportunity Dashboard':['My Opportunities','Team Opportunities'],
   'Opportunity Followup':['Opportunity Followup List','Opportunity Report'],
   'Sales Quotations': ['Quotation List'],
   'Business/Sales Activity': ['Business/Sales Activity'],
   Target:['Target List'],
   'Campaigns Data':['Campaign List'],
   'Project Tracker':['Project Tracker List','Project Tracker Report'],
   Accounts:['Customer','Contacts','Vendor Master'],
   'Item Master': ['Category Master','Division Master','Model Master','Item Master','Competitor Data','Item Category'],
   'Other Masters': ['Industry Division','Account Type','Industry Segment','Industry Sub Segment'],
   'Source Master': ['Item Source Master','Item Category'],
   'Item Attribute': ['Brand','Segment','Main Channel','SubChannel','Item Group 1','Item Group 2','Item Group 3','Item Group 4','Item Type','Item Sub Type'],
   'Customer Attribute': ['Customer Class','Industry Type','Industry Sub Type','Cust Divsion','Cust Sub Division','Cust Group','Cust Sub Group','Cust Type','Cust Sub Type', 'Cust Group 1','Cust Group 2','Cust Group 3'],
   'Field Selection': ['Customer Master', 'Contact Master','Store Master','Item Master','User Master'],
   'Sales Area': ['Sales Area','Sales Org','Distribution Channel','Business Division','Sales Office','Sales Area Determination'],
   'User Data': ['Designation Master', 'Designation Hierarchy','Department Setup'],
   'User Access': ['Role Master','Role Access Master'],
   'Purchase Area': ['Purchase Org','Buyer Code'],
   'Inventory Area': ['Plant Setup','Warehouse Master','Regional Depot','Stock Unit Area','Store Setup'],
   'Cost Data Setup': ['Cost Center','Sub Cost Center1','Sub Cost Center2'],
   'Org Setup': ['Org Unit Setup'],
   'Geography Setup': ['Region','State-Region','Country','State','District'],
   'User Master': ['New User'],
   'Workflow Setup': ['Allocation Matrix','Delegation Matrix'],
   'User Logs':['User Login'],
   'Emailer': ['Add Email','Delayed Lead'],
   'SAP Interface': ['Item Master - SAP to CRM','Customer Master - CRM to SAP', 'SO Creation - CRM to SAP'],
   'Bulk Upload': ['Item Master Upload','Customer Master Upload','Contact Master Upload','User Master Upload']
    // Add more as needed
  };
 
  // Icons
  faIcons: { [key: string]: IconDefinition } = {
    Reports: faChartBar,
    Leads: faBullseye,
    Opportunities: faTable,
    'Quotation Management': faFileAlt,
    Activities: faChartBar,
    'Sales Target': faBullseye,
    Campaign: faBriefcase,
    'Project Tracker': faProjectDiagram,
    'Master Data': faTable,
    'Master Data Setup': faCog,
    'Business Setup': faCog,
    'User Mgmt': faUsers,
    Communication: faEnvelope,
    Interface: faCog,
    'Bulk Upload': faUpload,
  };  
  faBars = faBars; // Hamburger menu icon
 
  // Toggle sidebar collapse
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  getLevel3Items(item: string): { route: string; title: string }[] {
    const dropdown = this.sidebarMenu.find((d) => d.children.some((c) => c.path === item));
    if (dropdown) {
      const child = dropdown.children.find((c) => c.path === item);
      return child?.children || [];
    }
    return [];
  }
  setActiveDropdown(title: string | null): void {
    this.activeDropdown = title;
  }
  
  clearActiveDropdown(): void {
    this.activeDropdown = null;
  }
  
  setActiveSubDropdown(item: string | null): void {
    this.activeSubDropdown = item;
  }
  
  clearActiveSubDropdown(): void {
    this.activeSubDropdown = null;
  }
}
 
