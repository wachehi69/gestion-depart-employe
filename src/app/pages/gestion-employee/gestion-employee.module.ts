import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule     // Module pour la pagination
  ]
})
export class GestionEmployeeModule { }
