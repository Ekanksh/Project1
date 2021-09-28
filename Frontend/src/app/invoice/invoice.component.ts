import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: any;

  
  constructor(public auth:AuthService,public http: HttpClient) {


   
    

   }

   OnReady(_number:any)
   {
    this.auth.getSingleData(_number).subscribe((res:any) => { 
     
      this.invoice=res 
      
      


    })
  } 
   
   AllData:any

Name=this.auth.getUserName();
  


ngOnInit() {
      this.auth.getAllData().subscribe((res:any) => { 
      this.AllData=res 
    console.log("ravi",this.AllData)
       })


      
   

  }

}
