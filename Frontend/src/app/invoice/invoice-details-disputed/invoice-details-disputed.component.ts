import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


import { AlertifyService } from 'src/services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-details-disputed',
  templateUrl: './invoice-details-disputed.component.html',
  styleUrls: ['./invoice-details-disputed.component.css']
})
export class InvoiceDetailsDisputedComponent implements OnInit {
  data: any;
  reason!: string;
  id :any;
  constructor(public auth:AuthService,  public activeroute: ActivatedRoute,
    private alertify: AlertifyService, public http: HttpClient, private route: Router) { }

  OnAccept(){
    this.auth.updateStatus(this.id).subscribe((res: any) => {
      this.alertify.success('Status Changed To Ready');
      this.route.navigate(['invoice']);
      console.log(res);
    })
  }

  Name=this.auth.getUserName();
  ngOnInit(): void {
     this.id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(this.id).subscribe((res: any) => {

      this.data=res
      
  })
}

}
