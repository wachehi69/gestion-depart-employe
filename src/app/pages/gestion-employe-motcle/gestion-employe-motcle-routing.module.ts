import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEmployeMotcleComponent } from './gestion-employe-motcle.component';

const routes: Routes = [
  {
    path: '' , component: GestionEmployeMotcleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEmployeMotcleRoutingModule { }
