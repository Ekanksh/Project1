import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dispute',
  templateUrl: './dispute.component.html',
  styleUrls: ['./dispute.component.css']
})
export class DisputeComponent implements OnInit {
  data: any;
id2:any
  constructor( public dialog: MatDialog,public activeroute: ActivatedRoute,public auth: AuthService
    ,public http:HttpClient,private route:Router,private alertify:AlertifyService) { }

  OnClick(){
    this.auth.updateDispute(this.id2).subscribe((res: any) => {
      this.alertify.success('Status Changed To Disputed');
      this.route.navigate(['invoice']);
      this.dialog.closeAll();
      // console.log(this.id2)
      // console.log(res);
      })

   
  }

 

  ngOnInit(): void {
    this.id2=localStorage.getItem("id");
    console.log(this.id2)
      


  
  }

}
