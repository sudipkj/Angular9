import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  getStudentDetails(){
    return 'service is called and this is working';
  }
}
