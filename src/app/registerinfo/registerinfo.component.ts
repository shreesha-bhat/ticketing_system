import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerinfo',
  templateUrl: './registerinfo.component.html',
  styleUrls: ['./registerinfo.component.css']
})
export class RegisterinfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }


}
