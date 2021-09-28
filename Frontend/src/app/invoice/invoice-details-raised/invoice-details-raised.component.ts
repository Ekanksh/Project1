import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice-details-raised',
  templateUrl: './invoice-details-raised.component.html',
  styleUrls: ['./invoice-details-raised.component.css']
})
export class InvoiceDetailsRaisedComponent implements OnInit {
  data: any;
  constructor(public auth:AuthService, public activeroute: ActivatedRoute,private http:HttpClient) { }

  Name=this.auth.getUserName();
  ngOnInit(): void {
    const id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(id).subscribe((res: any) => {

      this.data=res
      
  })
}

}
