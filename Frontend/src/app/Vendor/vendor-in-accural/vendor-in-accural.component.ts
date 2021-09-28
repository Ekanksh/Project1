import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-in-accural',
  templateUrl: './vendor-in-accural.component.html',
  styleUrls: ['./vendor-in-accural.component.css']
})
export class VendorInAccuralComponent implements OnInit {
  data: any;
  constructor(public auth:AuthService , public activeroute: ActivatedRoute) { }

  new=this.auth.getVendorName();
  ngOnInit() {
    const id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(id).subscribe((res: any) => {

      this.data=res
      



    })
    
}

}