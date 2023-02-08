import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emptitle:String = "The list of emp is below";
  empTblColumns:String[]=["Name","Id","Salary"];

  ngOnInit(){
  console.log("Show columns"+this.empTblColumns[0]); 
  }

}
