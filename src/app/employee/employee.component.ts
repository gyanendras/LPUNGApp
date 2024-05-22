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
  emptitle:String = "New The list of emp is below";
  empTblColumns:String[]=["Name","Id","Salary"];
  emps:Employee[]=[];
  city!:String;
  constructor(private ds:EmpDataService){}

  ngOnInit(){
  console.log("Show columns"+this.empTblColumns[0]); 
  this.ds.getEmpData().subscribe(res=>{
    console.log(res);
    this.emps = res.map(item =>{
      console.log("item values  " + item.empId+" "+item.name+" "+item.depId);
      return new Employee( item.empId,item.name,item.jobId,item.salary,item.city,item.depId,2000);
    } );
  console.log(this.emps);
    });

   
  }

  mod(x:Employee){
    console.log(x);
    this.ds.updEmpData(x);
  }

}
