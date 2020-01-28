import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdetailsService {

  constructor(private http:HttpClient) { }

  getfromdetail():Observable<details[]>{
    return this.http.get<details[]>("./assets/ticketrequest.json");
  }
}
