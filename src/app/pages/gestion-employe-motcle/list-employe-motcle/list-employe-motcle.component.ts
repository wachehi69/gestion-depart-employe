import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmploye } from '../../Employee/employee';

@Component({
  selector: 'app-list-employe-motcle',
  templateUrl: './list-employe-motcle.component.html',
  styleUrls: ['./list-employe-motcle.component.css']
})
export class ListEmployeMotcleComponent implements OnInit{

  public employeesfilter: any[] = [];
  public employees : any[] = [];

  private _motclefilter = "mot";
  public criteria = "";

  PAGE = 0;
  PAGESIZE = 3;
  CURRENTINDEX= -1 ;
  count : number;

   constructor(private employeService: EmployeeService){}

  ngOnInit(){  
   this.getlistemployePagingByMotCle();   
   this.motclefilter = ''; 
   
  }

  getRequestParams(page: number, pageSize: number) : any{
  let params: any= {}
  if(page) {
    params['page']= page -1;
    if(pageSize){
     params['pageSize'] = pageSize;
    }
    return params;
  }

  }

  public get motclefilter(): string {
    return this._motclefilter;   
     }
   
  public set motclefilter(filter: string){    
     this._motclefilter = filter;
     this.employeesfilter = this.motclefilter ? this.filterMotcle(filter) : this.employees;
     
    }
  getlistemployePagingByMotCle() : void {
    // Récuperation des params
   const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);
   this.employeService.getEmployeMotcleByPaging(params).subscribe(data => {
    const {employees, totalItems, totalPage, pageCurrent} = data;  
    this.employees = employees;  
    this.employeesfilter = this.employees;  
    this.count = totalItems;
    }, err => console.log(err));
  }

  private filterMot(criteria: string) :  IEmploye[] {
   criteria = criteria.toLowerCase();   
   const resultat = this.employees.filter(
    (employee: IEmploye) =>  employee.employeeLastName.toLowerCase().indexOf(criteria.toLowerCase()) != -1); 
    return resultat;
  }

  handlePageChange(event: number) {
    this.PAGE = event;
    this.getlistemployePagingByMotCle();
  }

  private filterMotcle(criteria: string): any[] {

   const listEmployeeMotCle : any[] = [];
   for(const employee of this.employees){
    if(employee.employeeLastName.toLowerCase().indexOf(criteria.toLowerCase()) !== -1) {
       listEmployeeMotCle.push(employee);
    }
   }
   return listEmployeeMotCle;

  }

  onDelete = (id : number ) =>{
    if(confirm("Est vous sur de vouloir supprimer cet employe ?"))
    this.employeService.delEmployee(id).subscribe(response =>{
      this.getlistemployePagingByMotCle();
    }, err => console.log(err)) ; 



  }
  

}
