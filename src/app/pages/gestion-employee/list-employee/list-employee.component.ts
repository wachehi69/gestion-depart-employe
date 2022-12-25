import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: any[] = [];
  constructor(private employeeServ: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();   
  }

  getEmployees() : void {
    this.employeeServ.getEmployees().subscribe(data => {
      this.employees.push(...data)
      console.log(data);
    }, err => console.log(err))
  }
 

}
