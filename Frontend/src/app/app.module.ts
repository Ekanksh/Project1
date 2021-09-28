import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubContractorComponent } from './sub-contractor/sub-contractor.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SubContractorDetailsComponent } from './sub-contractor/sub-contractor-details/sub-contractor-details.component';
import { InvoiceDetailInAccrualComponent } from './invoice/invoice-detail-in-accrual/invoice-detail-in-accrual.component';
import { InvoiceDetailsReadyComponent } from './invoice/invoice-details-ready/invoice-details-ready.component';
import { InvoiceDetailsDisputedComponent } from './invoice/invoice-details-disputed/invoice-details-disputed.component';
import { InvoiceDetailsRaisedComponent } from './invoice/invoice-details-raised/invoice-details-raised.component';
import { InvoiceDetailsPaidComponent } from './invoice/invoice-details-paid/invoice-details-paid.component';
//import { DisputeComponent } from './invoice/invoice-details-ready/Dispute/dispute/dispute.component';
import {MatInputModule} from '@angular/material/input';

import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';
import { AuthgaurdGuard } from '../AuthGaurd/authgaurd.guard';
import { TokenIntercepterService } from 'src/services/token-intercepter.service';
import { VendorDashbordComponent } from './vendor-dashbord/vendor-dashbord.component';
import { VendorPanelComponent } from './Vendor/vendor-panel/vendor-panel.component';
import { VendorSubmitedInvoiceComponent } from './Vendor/vendor-submited-invoice/vendor-submited-invoice.component';
import { EnrolUserComponent } from './enrol-user/enrol-user.component';
import { VendorInAccuralComponent } from './Vendor/vendor-in-accural/vendor-in-accural.component';
import { VendorDisputedComponent } from './Vendor/vendor-disputed/vendor-disputed.component';
import { InvoiceReadyVendorComponent } from './Vendor/invoice-ready-vendor/invoice-ready-vendor.component';
import { DisputeComponent } from './Vendor/invoice-ready-vendor/Dispute/dispute/dispute.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    SubContractorComponent,
    InvoiceComponent,
    SubContractorDetailsComponent,
    InvoiceDetailInAccrualComponent,
    InvoiceDetailsReadyComponent,
    InvoiceDetailsDisputedComponent,
    InvoiceDetailsRaisedComponent,
    InvoiceDetailsPaidComponent,
    DisputeComponent,
    VendorDashbordComponent,
    VendorPanelComponent,
    VendorSubmitedInvoiceComponent,
    EnrolUserComponent,
    VendorInAccuralComponent,
    VendorDisputedComponent,
    InvoiceReadyVendorComponent,
    DisputeComponent
   
  
 
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    

  ],
  providers: [
    AlertifyService,
    AuthService,
    AuthgaurdGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
