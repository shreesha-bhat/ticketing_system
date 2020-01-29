import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormdetailsService } from '../formdetails.service';
import {FormControl,FormBuilder,Validators, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details:details[];
  loginForm:FormGroup;
  submitted=false;
  constructor(private router:Router,private formdetails:FormdetailsService,private formbuilder:FormBuilder) { 
  }
  ngOnInit() {
    this.formdetails.getfromdetail().subscribe(data=>{
      this.details=data;
  });
   this.loginForm=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}
  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
  get f() { 
    return this.loginForm.controls; 
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) { 
      return;
    }
}
}
