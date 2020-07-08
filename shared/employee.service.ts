import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

 
  postEmployee(emp: Employee):Observable<Employee> {
       return this.http.post<Employee>(this.baseURL,emp);
     }

  getEmployeeList():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  putEmployee(empee: Employee) {
    return this.http.put(this.baseURL + `/${empee._id}`, empee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}