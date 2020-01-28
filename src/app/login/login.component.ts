import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormdetailsService } from '../formdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details:details[];
  constructor(private router:Router,private formdetails:FormdetailsService) { }

  ngOnInit() {
    this.formdetails.getfromdetail().subscribe(data=>{
      this.details=data;
  });
}

  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
}
