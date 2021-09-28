import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-enrol-user',
  templateUrl: './enrol-user.component.html',
  styleUrls: ['./enrol-user.component.css']
})
export class EnrolUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router,
    private alertify: AlertifyService,
    private auth: AuthService) { }

  user = this.fb.group({
    userName: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
