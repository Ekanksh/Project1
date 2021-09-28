import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sub-contractor',
  templateUrl: './sub-contractor.component.html',
  styleUrls: ['./sub-contractor.component.css']
})
export class SubContractorComponent implements OnInit {
  AllData: any;

  constructor(public auth:AuthService) { }

  Name=this.auth.getUserName();

  ngOnInit(): void {
    this.auth.getAllData().subscribe((res:any) => { 
      this.AllData=res 
       })
  }

}
