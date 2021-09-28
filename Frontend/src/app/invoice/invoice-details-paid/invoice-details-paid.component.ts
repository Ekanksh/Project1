import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-details-paid',
  templateUrl: './invoice-details-paid.component.html',
  styleUrls: ['./invoice-details-paid.component.css']
})
export class InvoiceDetailsPaidComponent implements OnInit {
  data: any;
  constructor(public auth:AuthService, public activeroute: ActivatedRoute) { }

  Name=this.auth.getUserName();
  ngOnInit(): void {
    const id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(id).subscribe((res: any) => {

      this.data=res
      



    })

  }

}
