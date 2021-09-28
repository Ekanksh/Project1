import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-vendor-submited-invoice',
  templateUrl: './vendor-submited-invoice.component.html',
  styleUrls: ['./vendor-submited-invoice.component.css']
})
export class VendorSubmitedInvoiceComponent implements OnInit {



AllData:any



  constructor(private http :HttpClientModule,public auth:AuthService) { }

    new=this.auth.getVendorName();
    
    
  ngOnInit() {
    this.auth.getAllData().subscribe((res:any) => { 
    this.AllData=res  
  })
  
}

}




