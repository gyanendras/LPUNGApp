import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getDept(id:Number):Observable<Department>{
    console.log("dept id is "+ id)
    let url = 'http://localhost:8080/department/'+id;
     return this.http.get<Department>(url);

  }
}
