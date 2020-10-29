import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
  ]
})
export class CompanyModule { }
