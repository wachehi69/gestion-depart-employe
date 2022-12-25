import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  departForm: FormGroup;
  submitted = false;    // variable pour indiquer le fomulaire a été envoyé lorsque il est à true

  constructor( private fb: FormBuilder, 
               private depService: DepartmentService ){ }

  ngOnInit(){
   // initialisation du formulaire
    this.departForm = this.fb.group({
      departmentName: ['', Validators.required]
   })
   
  }
  get f() {
    return this.departForm.controls
  }
  
  addDepartement(): void { 
    
    this.submitted = true;    // true veut dire que formulaire envoyé
    // verifions si le formulaire est valide ou pas
   if(this.departForm.invalid){  // invalide
    return;   // retourne sur le formulaire
   }
   else {
    console.log(this.departForm.value)
   // ici on recupere le nom du departement
    this.depService.createDepartement(this.departForm.value).subscribe(
      response => {
      console.log("ok");  
      }, err => console.log(err)
    );

   }
    

  }

}
