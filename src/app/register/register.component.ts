import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  constructor(public utility:UtilityService) { }
  emp=new Employee();
  empRegister(registerEmp:NgForm){
      
    this.utility.registerEmployee(this.emp)
    .subscribe(result=>console.log(result));
 }
}