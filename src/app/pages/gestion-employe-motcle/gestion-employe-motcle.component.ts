import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-employe-motcle',
  templateUrl: './gestion-employe-motcle.component.html',
  styleUrls: ['./gestion-employe-motcle.component.css']
})
export class GestionEmployeMotcleComponent implements OnInit{

 public employeeShared: any ; 
 isUpdating: boolean = false;

  ngOnInit(){    
  }

  get =($event: any) => {
  this.isUpdating = true;
  this.employeeShared = $event;
  
  }

}
