import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-vendor-panel',
  templateUrl: './vendor-panel.component.html',
  styleUrls: ['./vendor-panel.component.css']
})
export class VendorPanelComponent implements OnInit {

 
  constructor(private fb: FormBuilder, private route: Router,
    private alertify: AlertifyService,
    private auth: AuthService) { }
  user = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })
  onSubmit() {
   // console.log(this.user.value);
    if (this.user.valid) {
      
      this.auth.loginUserVendor({
        userName: this.user.value.userName,
        password: this.user.value.password
      }).subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          this.alertify.success('Signin Successful');
          this.route.navigate(['VendorSubmitedInvoice']);
          localStorage.setItem("user1", res.user.userName)
          localStorage.setItem("newtoken", res.token)
        } else if (res.status == 401) {
          this.alertify.error("Please enter correct user name/password");
        }
      })
    } else {
      this.alertify.error("Enter required field");
    }
  }
  ngOnInit(): void {
  }

}