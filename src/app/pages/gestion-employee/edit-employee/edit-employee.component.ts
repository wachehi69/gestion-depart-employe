import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

@Input() employee: any;
a: any
formEmployee: FormGroup;
submitted: boolean = false;
listDepartments: any []= [];

constructor(
            private employeeService: EmployeeService,
            private fb: FormBuilder, 
            private departmentService: DepartmentService){}

 ngOnInit(): void {
  this.getListDepartment();

  this.formEmployee = this.fb.group({
    employeeFirstName: ['', Validators.required], 
    employeeLastName:  ['', Validators.required],
    employeePhone: ['', Validators.required],
    departmentId: ['', Validators.required]
  })
  alert(this.employee);
    this.setEmploye(this.employee)  //
  }
  getListDepartment() : void {
  this.departmentService.getListDepartment().subscribe(data => {
    this.listDepartments = data;
  }, err => console.log(err));

}

 get f() {
  return this.formEmployee.controls;
 }

 updateEmployee() : void {
  //verifions le formulaire envoyé si valide ou pas
    this.submitted = true;   // indique que le formulaire a été soumis par l'utilisateur
   if(this.formEmployee.invalid) { 
   return;
   }else {
    const data = {  // récuperation des données formaulaire
      employeeFirstName: this.f['employeeFirstName'].value,
      employeeLastName: this.f['employeeLastName'].value,
      employeePhone: this.f['employeePhone'].value,
      departmentId: parseInt(this.f['departmentId'].value)
    }

    this.employeeService.updateEmployee(data, this.employee.id).subscribe(response => {
     this.formEmployee.reset();
     this.submitted = false;
    }, err => {
      console.error(err)
    });
    
   }
  
 }
// methode permettant de valoriser les données du formulaire pour l'edition
 setEmploye = (e: any) => {
      console.log(e);
      this.f['employeeFirstName'].setValue(e.employeeFirstName),
      this.f['employeeLastName'].setValue(e.employeeLastName),
      this.f['employeePhone'].setValue(e.employeePhone),
      this.f['departmentId'].setValue(e.department.id)
 }

}
