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
  submitted: boolean= false // variable qui indique true si le formulaire est envoyé
  listDepart: any [] = [];

  constructor( 
    private employeServ: EmployeeService,
    private departmentServ: DepartmentService,
    private fb: FormBuilder ){}

   ngOnInit() {

    this.getListDepartment();
      this.employeeForm = this.fb.group({    // initialisation des champs formulaire
      employeeFirstName: ['', Validators.required], 
      employeeLastName:  ['', Validators.required],
      employeePhone: ['', Validators.required],
      departmentId: ['', Validators.required]
      }) 
  }

  getListDepartment() : void {
    this.departmentServ.getListDepartment().subscribe(data => {
      this.listDepart = data;
    }, err => console.log(err))
  }

  ajoutEmployee() : void {
   //verifions le formulaire envoyé si valide ou pas
     this.submitted = true;   // indique que le formulaire a été soumis par l'utilisateur
    if(this.employeeForm.invalid) { 
    return;
    }else {
     console.log(this.employeeForm.value); 
      this.employeServ.creatEmployee(this.employeeForm.value).subscribe(data => {
        console.log(data)    
        this.employeeForm.reset();
        this.submitted = false;
      }, err => console.log(err))

    }
   
  }
  // la methode qui permet de renoyer le fomulaire avec tous les champs
  get f(){
    return this.employeeForm.controls;
  }

}
