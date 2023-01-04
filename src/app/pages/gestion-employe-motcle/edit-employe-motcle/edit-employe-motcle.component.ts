import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employe-motcle',
  templateUrl: './edit-employe-motcle.component.html',
  styleUrls: ['./edit-employe-motcle.component.css']
})
export class EditEmployeMotcleComponent implements OnInit {

  @Input() employee : any
  formEmployee:FormGroup;
  public submitted : boolean = false;
  public listDepart: any[] = [];

   constructor(
              private fb: FormBuilder,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService
          ){}

  ngOnInit() {
    this.getListDepartment();

  this.formEmployee = this.fb.group({   
    employeeLastName: ['', Validators.required],
    employeeFirstName: ['', Validators.required],
    employeePhone:['', Validators.required],
    departmentId: ['', Validators.required]
  }) 
   this.setEmployee(this.employee);   
  }  

  get f(){
    return this.formEmployee.controls;
  }

  setEmployee = (emp: any) =>{    
   this.f['employeeLastName'].setValue(emp.employeeLastName),
   this.f['employeeFirstName'].setValue(emp.employeeFirstName),
   this.f['employeePhone'].setValue(emp.employeePhone),
   this.f['departmentId'] .setValue(emp.department.id)
   
  }

  getListDepartment() {
    this.departmentService.getListDepartment().subscribe(data => {
      this.listDepart.push(...data);
    }, err => {
       console.log(err);
    })
  }

  ajoutEmployee() {
   this.submitted = true;
   if(this.formEmployee.invalid){
    return
   }else {
      const data = {
       employeeLastName: this.f['employeeLastName'].value, 
       employeeFirstName: this.f['employeeFirstName'].value,
       employeePhone: this.f['employeePhone'].value,
       departmentId: parseInt(this.f['departmentId'].value)
      }
     this.employeeService.updateEmployee(data, this.employee.id).subscribe( response => {
     this.formEmployee.reset();
     this.submitted = false;
     }, err => console.log(err));

  } 

  }
}
