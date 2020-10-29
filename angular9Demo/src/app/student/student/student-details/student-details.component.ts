import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers : [StudentServiceService]
})
export class StudentDetailsComponent implements OnInit {

  constructor(private studentservice : StudentServiceService) { }
  message : string ;
  ngOnInit(): void {
    this.message = this.studentservice.getStudentDetails();
  }

}
