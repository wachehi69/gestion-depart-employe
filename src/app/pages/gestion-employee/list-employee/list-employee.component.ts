import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
 CURRENTINDEX= -1 ;
 PAGE = 0;
 PAGESIZE = 4;
  public employees: any[] = [];
  public listemployees: any[] = [];
  public count = 0;
  constructor(private employeeServ: EmployeeService){}

  ngOnInit(): void {
   // this.getEmployees();
   this.getEmployeesPaging();   
  }

  public getEmployees() : void {
    this.employeeServ.getEmployees().subscribe(data => {
      this.employees.push(...data)
      console.log(data);
    }, err => console.log(err))
  }
 
  getRequestParams(page: number, pageSize: number): any {
   let params: any ={};
   if(page) {   // si page est definie
    params['page'] = page - 1;
   }
   if(pageSize) { //si pagesize est definie
    params['size'] = pageSize ;
   }
    return params;
  }

  // methode qui permet d'afficher la liste des employes par page
  getEmployeesPaging() : void {

    //Récuperetion d'abord des parametres de la page
    const params = this.getRequestParams(this.PAGE, this.PAGESIZE);

    this.employeeServ.getEmployeesByPagination(params).subscribe(response => {      
      const {employees, totalItems, totalPage} = response;
      this.employees = employees;
      this.count = totalItems;
      console.log(employees,totalItems, totalPage );
      
    }, err => console.log(err))
  }

  handlePageChange(event: number) {
    this.PAGE = event;
    this.getEmployeesPaging();
  }


}
