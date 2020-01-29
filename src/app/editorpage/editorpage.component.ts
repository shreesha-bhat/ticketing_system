import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-editorpage',
  templateUrl: './editorpage.component.html',
  styleUrls: ['./editorpage.component.css']
})
export class EditorpageComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  GoTopage(pagename:string){
    this.router.navigate([`${pagename}`]);
  }

  submit(problem,Priority){
    console.log(Priority)
    localStorage.setItem("problem",JSON.stringify(problem))
    localStorage.setItem("Priority",JSON.stringify(Priority))

  }
}
