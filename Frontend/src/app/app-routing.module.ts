import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SubContractorComponent } from './sub-contractor/sub-contractor.component';
import {SubContractorDetailsComponent} from "./sub-contractor/sub-contractor-details/sub-contractor-details.component";
import { InvoiceDetailInAccrualComponent } from './invoice/invoice-detail-in-accrual/invoice-detail-in-accrual.component';
import { InvoiceDetailsReadyComponent } from './invoice/invoice-details-ready/invoice-details-ready.component';
import { InvoiceDetailsDisputedComponent } from './invoice/invoice-details-disputed/invoice-details-disputed.component'; 
import { InvoiceDetailsRaisedComponent } from './invoice/invoice-details-raised/invoice-details-raised.component';
import { InvoiceDetailsPaidComponent } from './invoice/invoice-details-paid/invoice-details-paid.component';
import { VendorPanelComponent } from './Vendor/vendor-panel/vendor-panel.component';
import { VendorDashbordComponent } from './vendor-dashbord/vendor-dashbord.component';
import { AuthgaurdGuard } from 'src/AuthGaurd/authgaurd.guard';
import { AuthgaurdGuard2 } from 'src/AuthGaurd/authGuard2.guard';
import { VendorSubmitedInvoiceComponent } from './Vendor/vendor-submited-invoice/vendor-submited-invoice.component';

import { EnrolUserComponent } from './enrol-user/enrol-user.component';
import { VendorInAccuralComponent } from './Vendor/vendor-in-accural/vendor-in-accural.component';
import { InvoiceReadyVendorComponent } from './Vendor/invoice-ready-vendor/invoice-ready-vendor.component';
import { VendorDisputedComponent } from './Vendor/vendor-disputed/vendor-disputed.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'invoice', component:InvoiceComponent ,canActivate: [AuthgaurdGuard]},
  {path:'SubContractor', component:SubContractorComponent ,canActivate: [AuthgaurdGuard]},
  {path:'SubContractor/SubContractor-deatils/:id', component:SubContractorDetailsComponent,canActivate: [AuthgaurdGuard]},
  {path:'invoice/InvoiceDetailInAccrualComponent/:id',component:InvoiceDetailInAccrualComponent,canActivate: [AuthgaurdGuard]},
  {path:'invoice/InvoiceDetailsReadyComponent/:id',component:InvoiceDetailsReadyComponent,canActivate: [AuthgaurdGuard]},
  {path:'invoice/InvoiceDetailsDisputedComponent/:id', component:InvoiceDetailsDisputedComponent,canActivate: [AuthgaurdGuard]},
  {path:'invoice/InvoiceDetailsRaisedComponent/:id',component:InvoiceDetailsRaisedComponent,canActivate: [AuthgaurdGuard]},
  {path:'invoice/InvoiceDetailsPaidComponent/:id',component:InvoiceDetailsPaidComponent,canActivate: [AuthgaurdGuard]},
  {path:'vendorPanel',component:VendorPanelComponent},
  {path:'vendorDashbord',component:VendorDashbordComponent,canActivate: [AuthgaurdGuard2]},
  {path:'VendorSubmitedInvoice',component:VendorSubmitedInvoiceComponent, canActivate:[AuthgaurdGuard2]},

  {path:'EnrollUserId',component:EnrolUserComponent},
  {path:'VendorSubmitedInvoice/InAccrualByVendorComponent/:id',component:VendorInAccuralComponent, canActivate:[AuthgaurdGuard2]},
  {path:'VendorSubmitedInvoice/InvoiceReadyVendorComponent/:id',component:InvoiceReadyVendorComponent,canActivate:[AuthgaurdGuard2]},
  {path:'VendorSubmitedInvoice/VendorDisputedComponent/:id',component: VendorDisputedComponent,canActivate:[AuthgaurdGuard2]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
