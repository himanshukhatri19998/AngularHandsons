import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(public httpClient:HttpClient){ }
   
  getEmployee(id:string):Observable<object>{
    
    return this.httpClient.get("http://localhost:8080/getEmp/"+id)
   }

   registerEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>("http://localhost:8080/registerEmp",
    {id:employee.id,name:employee.name,salary:employee.salary}
    ,
    {responseType:"json"}
    );
     
   }
}