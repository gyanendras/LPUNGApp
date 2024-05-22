import { Component, Input, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data-service.service';
import { Employee } from '../employee';
import { Department } from '../department';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../department.service';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private ds:DepartmentService, private route:ActivatedRoute){}
;
  @Input()
  empDept:Employee = new Employee(0,"ab", "bc",0,"ef",0,0);
  dept:Department = new Department(0,"defDept");
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => { 
       let z=params.get("did");
       console.log("Z is"+ z);
       //this.empDept.depId = Number(z);
       this.dept.did = Number(z);

       

      }
    );

    this.ds.getDept(this.dept.did).subscribe(
      {
        next:(x)=>{
          console.log("data recieved in comp "+x);
          this.dept=x},
        error:(err)=>{console.log(err)}
      }
    );
    console.log("in dept comp"+this.dept);
      
      
      
      
      
      
      
      
      
      
    
  }
 
  
}
