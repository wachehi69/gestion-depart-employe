import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeMotcleRoutingModule } from './gestion-employe-motcle-routing.module';
import { ListEmployeMotcleComponent } from './list-employe-motcle/list-employe-motcle.component';
import { GestionEmployeMotcleComponent } from './gestion-employe-motcle.component';
import { EditEmployeMotcleComponent } from './edit-employe-motcle/edit-employe-motcle.component';
import { AddEmployeMotcleComponent } from './add-employe-motcle/add-employe-motcle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListEmployeMotcleComponent,
    GestionEmployeMotcleComponent,
    EditEmployeMotcleComponent,
    AddEmployeMotcleComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeMotcleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule     // Module pour la pagination
  ]
})
export class GestionEmployeMotcleModule { }
