import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './company/employee/employee.component';
import { StudentComponent } from './student/student/student.component';
import { StudentRegistrationComponent } from './student/student/student-registration/student-registration.component';
import { StudentDetailsComponent } from './student/student/student-details/student-details.component';
import { MatdesignComponent } from './matdesign/matdesign.component';
import { Portal1Component } from './portal1/portal1.component';
import { Portal2Component } from './portal2/portal2.component';
import { Portal3Component } from './portal3/portal3.component';



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
}, {
  path :'matdesign', component : MatdesignComponent
}
, {
  path : 'portal1', component : Portal1Component
}, {
  path : 'portal2', component : Portal2Component
}, {
  path : 'portal3', component : Portal3Component
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
