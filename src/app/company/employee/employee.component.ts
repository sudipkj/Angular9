import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
    console.log("in employee component constructor is called");
   }

  ngOnInit(): void {
    console.log("in employee component ngOnInit is called");
    
  }

}
