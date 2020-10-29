import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './company/employee/employee.component';
import { StudentComponent } from './student/student/student.component';
import { StudentRegistrationComponent } from './student/student/student-registration/student-registration.component';
import { StudentDetailsComponent } from './student/student/student-details/student-details.component';



const routes: Routes = [
  {
  path : 'employee', component : EmployeeComponent
  },{
  path : 'student' , children : [{
    path : '', component : StudentComponent
  },{
    path : 'studentReg' , component : StudentRegistrationComponent
  },{
    path : 'studentDet' , component : StudentDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
