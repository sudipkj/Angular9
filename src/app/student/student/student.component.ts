import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  goToStudent(val : string) : void{
    if(val == 'stuReg'){
      this.router.navigate(['./student/studentReg'])
    }else if(val == 'stuDet'){
      this.router.navigate(['./student/studentDet'])
    }
  }
}
