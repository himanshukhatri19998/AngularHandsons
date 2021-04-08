import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent  {
  
  constructor(public utility:UtilityService) { }
  // observable
  // subscriber(observer)
  emp:any;
  status:boolean=false;
  status1:boolean=false;
   error:string;
 
 
  empSearch(searchEmp:NgForm){
     this.status=false;
   let obs=this.utility.getEmployee(searchEmp.value.id);
   obs.subscribe(next=>{ this.emp=next;this.status=true;},
                 
                  error=> {this.error="employee not found";},
                  
                 ()=>console.log("code is over"));
    searchEmp.reset();
  }
}