import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { FormArray, FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-vendor-dashbord',
  templateUrl: './vendor-dashbord.component.html',
  styleUrls: ['./vendor-dashbord.component.css']
})
export class VendorDashbordComponent implements OnInit {
  data!: FormGroup;



  



  constructor(private fb: FormBuilder, public auth: AuthService, private http: HttpClient,
     private alertify: AlertifyService
    , private route: Router) {


   
  }

  ngOnInit(): void {

    this.data = this.fb.group({
      Invoice_number: ['', Validators.required],
      Generated_Date: ['', Validators.required],
      Contractor_Name: ['', Validators.required],
      Start_Date: ['', Validators.required],
      End_Date: ['', Validators.required],
      Vendor_Name: ['', Validators.required],
      Rate: ['', Validators.required],
      Total_Hours_Billed: ['', Validators.required],
      Approved_Amount: ['', Validators.required],
      Skills: ['', Validators.required],
      Role: ['', Validators.required],
      Experience: ['', Validators.required],
      Location: ['', Validators.required],

      Additional_Expenses:this.fb.array([
        this.addAdditionalInfo()
      ]),

      Billable_Hours: this.fb.array([
        this.addSkillForm()
      ]),

    });

  }


  addAdditionalInfo():FormGroup{
    return this.fb.group({
      Expense_Type: ['', Validators.required],
      Reimbursement_Limit: ['', Validators.required],
      Claimed_Amount: ['', Validators.required],
      Approved_Amount: ['', Validators.required],
     Uploaded_Recipt: ['', Validators.required],
     Expenses_type: ['', Validators.required],
     Rateperhour: ['', Validators.required],
     Approved_Ot_Hour: ['', Validators.required],
    });
  }

   addSkillForm(): FormGroup {
    return this.fb.group({
      Date_From: ['', Validators.required],
      Date_to: ['', Validators.required],
      Overtime: ['', Validators.required],
      Hours_Approved: ['', Validators.required],
    });
   }

 

   addSkill(){
     (<FormArray>this.formData).push(this.addSkillForm());

   }

   get formData() { return <FormArray>this.data.get('Billable_Hours'); }
   


   addAdditional(){
    (<FormArray>this.data2).push(this.addAdditionalInfo());

  }

  get data2() { return <FormArray>this.data.get('Additional_Expenses'); }

  onSubmit()
  {

    if (this.data.valid) {

      this.auth.dashboarddata(

      this.data.value).subscribe((res: any) => {


          console.log(res);
          this.alertify.success('Successfully Save ');
          this.route.navigate(['vendorPanel']);

      },(err )=>{
        this.alertify.error("Failed To Submit");
      }
      )
    } else {
      this.alertify.error("Enter the required field");
    }


   }

 





 







  Name = this.auth.getUserName();




}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

