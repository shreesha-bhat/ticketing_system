import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }
}
