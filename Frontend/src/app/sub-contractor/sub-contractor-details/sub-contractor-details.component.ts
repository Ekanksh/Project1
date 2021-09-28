import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-contractor-details',
  templateUrl: './sub-contractor-details.component.html',
  styleUrls: ['./sub-contractor-details.component.css']
})
export class SubContractorDetailsComponent implements OnInit {
  data: any;
  
  id :any;
  constructor(public auth:AuthService,public activeroute: ActivatedRoute) { }

  Name=this.auth.getUserName();
AllData:any
  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(this.id).subscribe((res: any) => {

      this.AllData = res

      localStorage.setItem("id",this.id);
  })


}
}
