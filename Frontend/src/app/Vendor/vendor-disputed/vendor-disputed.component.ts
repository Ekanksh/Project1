import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-vendor-disputed',
  templateUrl: './vendor-disputed.component.html',
  styleUrls: ['./vendor-disputed.component.css']
})
export class VendorDisputedComponent implements OnInit {
  data: any;
  constructor(public auth:AuthService,  public activeroute: ActivatedRoute) { }

  Name=this.auth.getUserName();
  ngOnInit(): void {
    const id = this.activeroute.snapshot.params['id'];


    this.auth.getSingleData(id).subscribe((res: any) => {

      this.data=res
  })
}

}
