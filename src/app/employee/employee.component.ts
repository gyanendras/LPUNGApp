import { Component, Injectable, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data-service.service';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emptitle:String = "The list of emp is below";
  empTblColumns:String[]=["Name","Id","Salary"];
  emps:Employee[]=[];
  constructor(private ds:EmpDataService){}

  ngOnInit(){
  console.log("Show columns"+this.empTblColumns[0]); 
  this.ds.getEmpData().subscribe(res=>{
    console.log(res);
    this.emps = res.map(item =>{
      return new Employee(item.name, item.empId,item.jobId,item.salary);
    } )
console.log(this.emps);
    });

   
  }

}
