import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employe-motcle',
  templateUrl: './add-employe-motcle.component.html',
  styleUrls: ['./add-employe-motcle.component.css']
})
export class AddEmployeMotcleComponent implements OnInit{

 
  formEmployeMot : FormGroup
  public submitted: boolean = false;
  public listDept: any[] = [];
  constructor(
    private employeserv: EmployeeService, 
    private departmentService: DepartmentService,
    private fb: FormBuilder){}

  ngOnInit(){
    this.getListDepartment();

    this.formEmployeMot = this.fb.group({
     employeeLastName: ['', Validators.required],
     employeeFirstName:['', Validators.required],
     employeePhone:['', Validators.required],
     departmentId: ['', Validators.required]     
    })
    
  }

  get f () {
    return this.formEmployeMot.controls;
  }

  ajoutEmploye = () => {

   this.submitted = true;
    if(this.formEmployeMot.invalid) {
      return;
    }else {

      this.employeserv.creatEmployee(this.formEmployeMot.value).subscribe(
        response => {
       this.formEmployeMot.reset();
       this.submitted = false;
        }, err => console.log(err))
    }
  } 

  getListDepartment() {
    this.departmentService.getListDepartment().subscribe(data => {
     this.listDept.push(...data); 
    }, err => console.log(err));
  }

}
