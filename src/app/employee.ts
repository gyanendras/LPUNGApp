export class Employee {
    empId:Number;
    name:String;
    jobId:String;
    salary:Number;
    city:String;
    depId:Number;
    testId:Number;
    

    constructor(empId:Number, name:String,jobId:String,salary:Number,city:String,
      depId:Number,testId:Number){
      this.name = name;
      this.empId = empId;
      this.jobId = jobId;
      this.salary = salary;
      this.city = city;
      this.depId = depId;
      this.testId = testId 
    }
}
