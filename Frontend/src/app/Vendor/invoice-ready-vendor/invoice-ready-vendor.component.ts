import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DisputeComponent } from 'src/app/invoice/invoice-details-ready/Dispute/dispute/dispute.component';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DisputeComponent } from './Dispute/dispute/dispute.component';


@Component({
  selector: 'app-invoice-ready-vendor',
  templateUrl: './invoice-ready-vendor.component.html',
  styleUrls: ['./invoice-ready-vendor.component.css']
})
export class InvoiceReadyVendorComponent implements OnInit {
  data: any;
  
  id :any;
  constructor(public dialog: MatDialog, public auth: AuthService, public activeroute: ActivatedRoute,
     private alertify: AlertifyService,public http:HttpClient,private route:Router) { }
    

  OnAccept(){
     this.auth.updateStatusRaised(this.id).subscribe((res: any) => {
      this.alertify.success('Status Changed To Raised');
      this.route.navigate(['VendorSubmitedInvoice']);
    console.log(res);
    })
 

}
Name=this.auth.getUserName();

  openDialog() {
    this.dialog.open(DisputeComponent);
   
  }



  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(this.id).subscribe((res: any) => {

      this.data=res

      localStorage.setItem("id",this.id);
     

    })
  }

}
