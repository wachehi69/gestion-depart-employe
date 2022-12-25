import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly apiUrl = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

  getListDepartment() : Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/departments`);
  }

  createDepartement(data: any) : Observable<any> {
   return  this.httpClient.post<any>(`${this.apiUrl}/api/departments`, data)
  }

  getOneDepartment(id: number) : Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/departments/{id}`);
  }
}
