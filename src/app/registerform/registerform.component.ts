import { Component, OnInit } from '@angular/core';
import { FormdetailsService } from '../formdetails.service';
import { HttpClient } from '@angular/common/http';
import { DataTableModule } from 'ng-angular8-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  details:details[]
  constructor(private fdetails:FormdetailsService,private router:Router) { }

  ngOnInit() {
    this.fdetails.getfromdetail().subscribe(data=>{
      console.log(data)
      this.details=data;
    });
  }
  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
  

}
