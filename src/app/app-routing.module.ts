import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { EditorpageComponent } from './editorpage/editorpage.component';
import { CommentpageComponent } from './commentpage/commentpage.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'registerinfo',
    component:RegisterinfoComponent
  },
  {
    path:'registerform',
    component:RegisterformComponent
  },
  {
    path:'editorpage',
    component:EditorpageComponent
  },
  {
    path:'commentpage',
    component:CommentpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
