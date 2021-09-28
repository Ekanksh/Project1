import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-detail-in-accrual',
  templateUrl: './invoice-detail-in-accrual.component.html',
  styleUrls: ['./invoice-detail-in-accrual.component.css']
})
export class InvoiceDetailInAccrualComponent implements OnInit {
  data: any;
  id :any;
  constructor(public auth: AuthService, public activeroute: ActivatedRoute,
    private alertify: AlertifyService, public http: HttpClient, private route: Router) { }

    OnAccept(){
      this.auth.updateStatus(this.id).subscribe((res: any) => {
        this.alertify.success('Status Changed To Raised');
        this.route.navigate(['invoice']);
        console.log(res);
      })
    }

  Name = this.auth.getUserName();
  ngOnInit() {
    this. id = this.activeroute.snapshot.params['id'];

   

    this.auth.getSingleData(this.id).subscribe((res: any) => {

      this.data = res

    })



  }

}

