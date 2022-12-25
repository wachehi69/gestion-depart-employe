import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  public departments: any [] = [];
  constructor( private depService: DepartmentService){  }


  ngOnInit(){
    this.loadServiceDepartment();    
  }

  loadServiceDepartment(): void {
    this.depService.getListDepartment().subscribe(data => {
     this.departments.push(...data);
    }, err => console.log(err) ) ;
  }

}
