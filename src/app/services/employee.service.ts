import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient :  HttpClient) { }

  private readonly apiUrl =  'http://localhost:8082'

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/employees`);
  }

  getEmployee(id : number) : Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/api/employees/${id}`)
  }

  creatEmployee( employee : any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/api/employees`, employee)
  }

  getEmployeesByDepartment(departementId: number) : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/employees/${departementId}`);
  }

  getEmployeesByPagination(params: any): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/employees/paging`, {params});
  }

  delEmployee(id : number) : Observable<any>{
    return this.httpClient.delete<any>(`${this.apiUrl}/api/employees/delete/${id}`);
  }

  updateEmployee( employee: any, id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/api/employees/update/${id}`, employee);
  }
  getEmployeMotcleByPaging(params: any) : Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/employees/pageable`, {params});
  }
  

}
