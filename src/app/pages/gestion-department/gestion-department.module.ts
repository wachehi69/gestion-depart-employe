import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GestionDepartmentComponent,  
    ListDepartmentComponent,
    AddDepartementComponent    
  ],
  imports: [
    CommonModule,
    GestionDepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionDepartmentModule { }
