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
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })

}
  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
  onSubmit() {
    this.check
    this.submitted = true;
    if (this.loginForm.invalid) { 
      return;
      
    }
}
get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('password');
}

check(user,pass){
  let passwrd=JSON.parse(localStorage.getItem("pwd"));
  let usernme=JSON.parse(localStorage.getItem("usr"));
  if(user == usernme && passwrd == pass){
    this.router.navigateByUrl('registerform')
  }
  else{
    this.router.navigateByUrl('/')
  }
}
}

