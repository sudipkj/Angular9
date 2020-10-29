import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  data : any;
  getCountryWiseData() : any{
    return this.data = [
      {
        "country" : "India",
        "listOfPpl" : [
          {
            "id" : "100",
            "name" : "Sudip Kumar",
            "address" : "viman nagar"
          },
          {
            "id" : "101",
            "name" : "Rahul saxena",
            "address" : "Chandan nagar"
          },
          {
            "id" : "102",
            "name" : "Priti Patil",
            "address" : "Bavdhan"
          }
        ]
      },
      {
        "country" : "Australia",
        "listOfPpl" : [
          {
            "id" : "2001",
            "name" : "Sudip Kumar",
            "address" : "viman nagar"
          },
          {
            "id" : "101",
            "name" : "Rahul saxena",
            "address" : "Chandan nagar"
          },
          {
            "id" : "102",
            "name" : "Priti Patil",
            "address" : "Bavdhan"
          }
        ]
      }
    ];
  }

  getStudents(): any{
    
   return this.data =  [
      {
        "id" : "100",
        "name" : "Sudip Kumar",
        "address" : "viman nagar"
      },
      {
        "id" : "101",
        "name" : "Rahul saxena",
        "address" : "Chandan nagar"
      },
      {
        "id" : "102",
        "name" : "Priti Patil",
        "address" : "Bavdhan"
      }
    ];
  }
  getMoreStudents() : any {
    return this.data = [
      {
        "id" : "100",
        "name" : "Sudip Kumar",
        "address" : "viman nagar"
      },
      {
        "id" : "101",
        "name" : "Rahul saxena",
        "address" : "Chandan nagar"
      },
      {
        "id" : "102",
        "name" : "Priti Patil",
        "address" : "Bavdhan"
      },
      {
        "id" : "103",
        "name" : "Pooja Kumari",
        "address" : "Lohegaon"
      },
      {
        "id" : "104",
        "name" : "Advait dandekar",
        "address" : "viman nagar"
      }
      
    ]
  }

  getEmployees() : any {
    return this.data = [{
      'empId' : 1000,
      'empName' : 'Sudip Kumar Jana',
      'empsalary' : 15000,
      'empDOB' : '09/12/1990',
      'gender': 'male'
    }, {
      'empId' : 1001,
      'empName' : 'Pooja singh Jana',
      'empsalary' : 8000,
      'empDOB' : '24/12/1992',
      'gender': 'female'
    },{
      'empId' : 1004,
      'empName' : 'Rahul prakash',
      'empsalary' : 16000,
      'empDOB' : '09/12/1996',
      'gender': 'male'
    }]
  }
}
