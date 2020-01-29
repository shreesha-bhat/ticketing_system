import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormBuilder,Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-registerinfo',
  templateUrl: './registerinfo.component.html',
  styleUrls: ['./registerinfo.component.css']
})
export class RegisterinfoComponent implements OnInit {

  regform:FormGroup;
  submitted=false;


  constructor(private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.regform=this.formbuilder.group({
      firstname:['',[Validators.required,Validators.minLength(5)]],
      lastname:['',Validators.required],
      username:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      orgname:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(5)]],
      cpassword:['',Validators.required]
    },{
      validators: this.MustMatch('password','cpassword')
    }

    )
  }
  onRegister(pwd,usr){
    console.log(pwd.value)
    console.log(usr.value)

    localStorage.setItem("pwd",JSON.stringify(pwd.value))
    localStorage.setItem("usr",JSON.stringify(usr.value))


  }
  
  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
  get f() { 
    return this.regform.controls; 
  }
  onSubmit() {
    this.submitted = true;
    if (this.regform.invalid) { 
      return;
    }
}
MustMatch(controlName: string, matchcontrolName: string) {
  return (FormGroup: FormGroup) => {
    const control = FormGroup.controls[controlName];
    const matchcontrol = FormGroup.controls[matchcontrolName];
    if (matchcontrol.errors && !matchcontrol.errors.mustMatch) {
      return;
    }
    if (control.value !== matchcontrol.value) {
      matchcontrol.setErrors({ mustMatch: true });
    } else {
      matchcontrol.setErrors(null);
    }
  }
}

}
