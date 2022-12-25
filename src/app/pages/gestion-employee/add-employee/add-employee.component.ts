import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeForm: FormGroup;   // déclaration du formulaire
  listDepart: any [] = [];

  constructor( 
    private employeServ: EmployeeService,
    private departmentServ: DepartmentService,
    private fb: FormBuilder ){}

   ngOnInit() {

    this.getListDepartment();
      this.employeeForm = this.fb.group({
      employeName : ['', Validators.required]  

      })

 
  }

  getListDepartment() : void {
    this.departmentServ.getListDepartment().subscribe(data => {
      this.listDepart = data;
    }, err => console.log(err))
  }

  ajoutEmployee() : void {
   // this.employeServ.creatEmployee().subscribe(data =>)
  }

}
