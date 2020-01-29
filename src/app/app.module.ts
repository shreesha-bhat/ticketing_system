import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { DataTableModule } from 'ng-angular8-datatable';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { EditorpageComponent } from './editorpage/editorpage.component';
import { CommentpageComponent } from './commentpage/commentpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotComponent,
    RegisterinfoComponent,
    RegisterformComponent,
    EditorpageComponent,
    CommentpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
