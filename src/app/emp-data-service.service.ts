import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private http:HttpClient) { }

   getEmpData(): Observable<Employee[]>{
    //return this.http.get<Employee[]>("http://localhost:8080/empdb/job/IT_PROG");
    return this.http.get<Employee[]>("http://localhost:8080/employee/all");
  }

  updEmpData(emp:Employee ):Observable<any>{
    return this.http.post("http://localhost:8080/employee",emp);
  }
}
