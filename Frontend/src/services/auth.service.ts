import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  
  // private loginUrl = "http://172.16.10.31:5000/login";
  // private Reg = "http://172.16.10.31:5000/reg";

  // private dashboardUrl="http://172.16.10.31:5000/Dashboard"

  // private DashboardSubmittedUrl="http://172.16.10.31:5000/DashboardSubmitted"


  // private DashboardSubmittedSingleUrl="http://172.16.10.31:5000/DashboardSubmitted/getData"

  // private DashboardUpdateStatusUrl="http://172.16.10.31:5000/DashboardSubmitted/updateStatus"

  // private DashboardDisputeStatusUrl="http://172.16.10.31:5000/DashboardSubmitted/disputeStatus"

  private loginUrl = "http://localhost:5000/login";
  private loginVendorUrl = "http://localhost:5000/loginVendor";

  private LoginVendorReg = "http://localhost:5000/regVendor";

  private Reg = "http://localhost:5000/reg";

  private dashboardUrl="http://localhost:5000/Dashboard"

  private DashboardSubmittedUrl="http://localhost:5000/DashboardSubmitted/alldata"


  private DashboardSubmittedSingleUrl="http://localhost:5000/DashboardSubmitted/getData"

  private DashboardUpdateStatusUrl="http://localhost:5000/DashboardSubmitted/updateStatus"

  private DashboardDisputeStatusUrl="http://localhost:5000/DashboardSubmitted/disputeStatus"

 private DashboardDisputeStatusUrlbyVendor="http://localhost:5000/DashboardSubmitted/byVendor"


 private DashboardUpdateStatusUrlInvoice="http://localhost:5000/DashboardSubmitted/updateStatusRaised"
  


 
  
 
  constructor(private http: HttpClient, private route: Router, private alertify: AlertifyService) { }


 

  loginUser(user: any) {
    return this.http.post(this.loginUrl, user);
  }

  loginUserVendor(user:any){
    return this.http.post(this.loginVendorUrl,user)
  }

  loginVendor() {
    return !!localStorage.getItem('newtoken');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserName() {
    return localStorage.getItem('userName')
  }

  getVendorName() {
    return localStorage.getItem('user1')
  }

  dashboarddata(data: any) {
    return this.http.post(this.dashboardUrl, data);
  }

 

  getAllData(){
    return this.http.get(this.DashboardSubmittedUrl)
  }

  getSingleData(_number: any){
    return this.http.get(`${this.DashboardSubmittedSingleUrl}/${_number}`)
  }


  updateStatus(_number:any){
    
    return this.http.put(this.DashboardUpdateStatusUrl,{Invoice_number:_number})
  }


  updateStatusRaised(_number:any){
    
    return this.http.put(this.DashboardUpdateStatusUrlInvoice,{Invoice_number:_number})
  }
  updateDispute(_number:any){
    
    return this.http.put(this.DashboardDisputeStatusUrl,{Invoice_number:_number})
  }

  updateDisputeByVendor(_number:any){
    
    return this.http.put(this.DashboardDisputeStatusUrlbyVendor,{Invoice_number:_number})
  }


  logOut(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('id')
    this.route.navigate(['/']);
    this.alertify.success("LogOut Successful")
  }


}
