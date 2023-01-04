import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDepartmentComponent } from './gestion-department/gestion-department.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: '' ,  component: PagesComponent,
    children: [
      {
        path: 'departments', loadChildren: () => import ("./gestion-department/gestion-department.module").then((m) => m.GestionDepartmentModule)
       
      },
      {
        path: 'employees', loadChildren: () => import ("./gestion-employee/gestion-employee.module").then((m) => m.GestionEmployeeModule)
      },
      {
        path: 'employees-motcle', loadChildren: () => import ("./gestion-employe-motcle/gestion-employe-motcle.module").then((m) => m.GestionEmployeMotcleModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
